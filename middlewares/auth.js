import jwt from 'jsonwebtoken'
import config from 'config'

export default (req, res, next) => {
  jwt.verify(req.token, config.secret, (err, decoded) => {
    if (err) {
      res.status(401)
        .send()
    } else {
      req.userId = decoded.aud
      next()
    }
  });
}