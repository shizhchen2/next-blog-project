const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')
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
    ctx.body = 'test api'
})
app.use(router.routes)
app.listen(8000);