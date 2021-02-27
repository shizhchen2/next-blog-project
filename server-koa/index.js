const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router()
// x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

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