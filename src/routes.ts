import { Context } from 'koa'
import * as Router from 'koa-router'
import SiteController from './controllers/SiteController'

export default (): Router.IMiddleware => {
  let router = new Router()

  router.get('/', async (ctx: Context) => {
    let controller = new SiteController()

    await controller.index.apply(controller, [ctx])
  })

  return router.routes()
}
