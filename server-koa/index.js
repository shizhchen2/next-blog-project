const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router()

router.get('/', async ctx => {
    ctx.body = 'home api'
    console.log('123')
})

router.get('/test', async ctx => {
    ctx.body = 'test api'
    console.log('123')
})
console.log(router.routes())
app.use(router.routes())
app.listen(8080);