import express from 'express'
import config from 'config'
import router from './router'
import morgan from 'morgan'
import { json as jsonBodyParser } from 'body-parser'
import bearerToken from 'express-bearer-token'
import cors from './middlewares/cors'
import auth from './middlewares/auth'
import mdb from './database/mongo'

const app = express()

app.use(morgan(config.log.access.type))
app.use(bearerToken())
app.use(jsonBodyParser())

app.all('*', cors)
app.use('/api', auth)

router(app)

mdb(config.mongo.host, config.mongo.port, config.mongo.dbName)
  .then(db => {
    console.log('MongoDB connected')

    app.set('mdb', db)
    app.listen(
        config.port,
        () => console.log(`Magic happens on port ${config.port}`)
    )
  })
  .catch(err => console.log(err))