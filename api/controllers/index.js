import todo from './todo'
import tokenLogin from './tokenLogin'

const controllers = [todo, tokenLogin]

export default router => {
  controllers.forEach(controller => {
    controller(router)
  })

  return router
}
