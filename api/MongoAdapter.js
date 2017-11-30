import { ObjectID } from 'mongodb'

class MongoAdapter {
  constructor(limit) {
    this.limit = limit
  }

  get(collection, id, offset) {
    return new Promise((resolve, reject) => {
      let query = {}

      if (id) {
        query._id = ObjectID(id)
      }

      let cursor = collection.find(query)

      if (!id) {
        cursor.skip(offset).limit(this.limit)
      }

      cursor
        .toArray((err, arr) => {
          if (err) {
            reject(err)
          } else {
            resolve(arr)
          }
        })
    })
  }

  insert(collection, doc) {
    return new Promise((resolve, reject) => {
      collection.insertOne(doc, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result.insertedId)
        }
      })
    })
  }

  update(collection, id, doc) {
    return new Promise((resolve, reject) => {
      collection.updateOne({_id: ObjectID(id)}, {$set: doc}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  remove(collection, ids) {
    const isMulti = Array.isArray(ids)
    let query;
    let options;

    if (isMulti) {
      const objIds = ids.map(id => ObjectID(id))

      query = {_id: {$in: objIds}}
      options = {justOne: true};
    } else {
      query = {_id: ObjectID(ids)}
      options = {justOne: false}
    }

    query.$isolated = 1

    return new Promise((resolve, reject) => {
      const result = collection.remove(query, {w:1}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

export default MongoAdapter