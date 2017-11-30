import config from 'config'
import jwt from 'jsonwebtoken'
import { format as prepare } from 'mysql'
import plainObjectBuilder from '../misc/plainObjectBuilder'

export default (router, db) => {
  router.post('/login', (req, res) => {
    const selectQueryString = prepare(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [req.body.identifier, req.body.password]
    )

    db.query(selectQueryString, (error, results) => {
      if (error) {
        res.status(500)
          .send()
      } else if (!results.length || results.length > 1) {
        res.status(401)
          .send()
      } else {
        const userData = plainObjectBuilder(results[0], ['id', 'password'])
        const userId = results[0].id

        jwt.sign({aud: userId}, config.secret, config.jwt, (err, token) => {
          if (err) {
            res.status(500)
              .send()
          } else {
            res.json({
              userData: userData,
              token: token
            })
          }
        })
      }
    })
  })
}