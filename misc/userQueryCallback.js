import config from 'config'
import plainObjectBuilder from './plainObjectBuilder'
import jwt from 'jsonwebtoken'

export default (error, results, res) => {
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
}