import config from 'config'
import TodoModel from '../../models/todo'
import MongoAdapter from '../../api/MongoAdapter'
import getOffsetByPage from '../../misc/dbPageToOffset'

const mongoAdapter = new MongoAdapter(config.mongo.adapter.limit)
const coll = uid => `todos-${uid}`

export default router => {
  router.route('/todo')
    .get((req, res) => {
      const db = req.app.get('mdb')
      const offset = getOffsetByPage(
        parseInt(req.query.page),
        config.mongo.adapter.limit
      )

      mongoAdapter.get(db.collection(coll(req.userId)), null, offset)
        .then(result => {
          if (result.length) {
            res.json(result)
          } else {
            res.status(404)
              .send()
          }
        })
        .catch(err => {
          res.status(500)
            .send()
        })
    })
    .post((req, res) => {
      const db = req.app.get('mdb')
      let doc = req.body.insertData

      if (doc._id) {
        delete doc._id
      }

      mongoAdapter.insert(db.collection(coll(req.userId)), doc)
        .then(insertedId => {
          res.json({id: insertedId})
        })
        .catch(err => {
          console.log(err)
          res.status(500)
            .send()
        })
    })

  router.route('/todo/:id')
    .get((req, res) => {
      const db = req.app.get('mdb')
      console.log(req.params.id)

      mongoAdapter.get(db.collection(coll(req.userId)), req.params.id)
        .then(result => {
          if (result.length) {
            res.json(result[0])
          } else {
            res.status(404)
              .send()
          }
        })
        .catch(err => {
          res.status(500)
            .send()
        })
    })
    .put((req, res) => {
      const db = req.app.get('mdb')
      let doc = req.body.updateData

      if (doc._id) {
        delete doc._id
      }

      mongoAdapter.update(db.collection(coll(req.userId)), req.params.id, doc)
        .then(result => {
          res.send()
        })
        .catch(err => {
          res.status(500)
            .send()
        })
    })
    .delete((req, res) => {
      const db = req.app.get('mdb')

      mongoAdapter.remove(db.collection(coll(req.userId)), req.params.id)
        .then(result => {
          if (result.result.n) {
            res.send()
          } else {
            res.status(404)
              .send(result)
          }
        })
        .catch(() => {
          res.status(500)
            .send()
        })
    })
}