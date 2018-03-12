import * as debug from 'debug'
import config from './../config/app'

export default debug(`lab:${config.name}`)
