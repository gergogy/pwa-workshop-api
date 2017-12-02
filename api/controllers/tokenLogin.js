import config from 'config'
import TodoModel from '../../models/todo'
import MongoAdapter from '../../api/MongoAdapter'
import getOffsetByPage from '../../misc/dbPageToOffset'
import loginCallback from '../../misc/userQueryCallback'
import { format as prepare } from 'mysql'
import { mysql } from '../../database'

const mongoAdapter = new MongoAdapter(config.mongo.adapter.limit)
const coll = uid => `todos-${uid}`

export default router => {
  router.get('/tokenLogin', (req, res) => {
    console.log(req.userId)
    const selectQueryString = prepare(
      "SELECT * FROM users WHERE id = ?",
      [req.userId]
    )

    mysql.query(selectQueryString, (err, results) => loginCallback(err, results, res))
  })
}