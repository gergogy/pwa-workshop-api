import { mysql } from '../database'
import login from './login'
import register from './register'

const controllers = [login, register]

export default router => {
  controllers.forEach(controller => {
    controller(router, mysql)
  })

  return router
}
