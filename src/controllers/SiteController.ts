import { Context } from 'koa'
import { random } from './../libs/helpers'

export default class SiteController {
  public async index (context: Context) {
    context.body = {
      message: 'success',
      data: {
        '$hashes': [...(function* () { let i = 0; while (i < 8) yield i++ })()].map((): string => random())
      }
    }
  }
}
