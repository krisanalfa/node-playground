import * as uuid from 'uuid/v1'
import { join as joinPath } from 'path'
import { createHmac as createHash } from 'crypto'
import { generate as randomstring } from 'randomstring'

export const rootPath = (...paths: string[]): string => {
  return joinPath.apply(undefined, [__dirname, '..', '..'].concat(paths))
}

export const appPath = (...paths: string[]): string => {
  return joinPath.apply(undefined, [__dirname, '..'].concat(paths))
}

export const random = (): string => {
  let miniRandom = [
    uuid(),
    randomstring({ length: 40 }),
    Math.floor(new Date().getTime() / 60000).toString(),
    process.hrtime().join('')
  ].join('')

  return createHash('sha1', uuid()).update(miniRandom).digest('hex')
}
