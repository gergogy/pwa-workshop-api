import config from 'config'
import jwt from 'jsonwebtoken'
import { format as prepare } from 'mysql'
import plainObjectBuilder from '../misc/plainObjectBuilder'

const DUPLICATED_ENTRY = 1062

export default (router, db) => {
  router.post('/register', (req, res) => {
    const columns = ['firstname', 'lastname', 'email', 'password']
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    ]
    const insertQueryString = prepare(
      "INSERT INTO users (??, ??, ??, ??) VALUES (?, ?, ?, ?)",
      [...columns, ...values]
    )

    db.query(insertQueryString, (err, result) => {
      if (err) {
        if (err.errno === DUPLICATED_ENTRY) {
          res.status(418)
            .send()
        } else {
          res.status(500)
            .send()
        }
      } else {
        jwt.sign({aud: result.insertId}, config.secret, config.jwt, (err, token) => {
          if (err) {
            res.status(500)
              .send()
          } else {
            res.json({token: token})
          }
        })
      }
    })
  })
}