import { Router } from 'express'
import apiControllers from './api/controllers'
import baseControllers from './controllers'

const router = Router()

export default app => {
  app.use('/', baseControllers(router))
  app.use('/api', apiControllers(router))
}