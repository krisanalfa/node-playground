import * as Koa from 'koa'
import routes from './routes'
import debug from './libs/debug'
import config from './config/app'

const app: Koa = new Koa()

app.use(routes())

const port = config.port
app.listen(port, () => {
  debug(`Application run at ::${port}`)
})
