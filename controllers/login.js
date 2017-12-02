import config from 'config'
import { format as prepare } from 'mysql'
import plainObjectBuilder from '../misc/plainObjectBuilder'
import loginCallback from '../misc/userQueryCallback'

export default (router, db) => {
  router.post('/login', (req, res) => {
    const selectQueryString = prepare(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [req.body.identifier, req.body.password]
    )

    db.query(selectQueryString, (err, results) => loginCallback(err, results, res))
  })
}