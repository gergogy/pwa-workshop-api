import { Db, Server, MongoClient } from 'mongodb'

export default (host, port, dbName) => {
  return new Promise((resolve, reject) => {
    const db = new Db(dbName, new Server(host, port));

    db.open((err, db) => err ? reject(err) : resolve(db))
  })
}