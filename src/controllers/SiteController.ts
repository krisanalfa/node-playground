import { Context } from 'koa'
import { random } from './../libs/helpers'

export default class SiteController {
  public async index (context: Context) {
    context.body = {
      version: '0.0.1',
      message: 'success',
      data: {
        '$hashes': [...(function* () { let i = 0; while (i <= 10) yield i++ })()].map((): string => random())
      }
    }
  }
}
