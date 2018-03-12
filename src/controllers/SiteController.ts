import { Context } from 'koa'
import { random } from './../libs/helpers'

export default class SiteController {
  public async index (context: Context) {
    context.body = {
      message: 'success',
      data: {
        '$hash': random()
      }
    }
  }
}
