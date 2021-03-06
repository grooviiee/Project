const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'HOME';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () =>{
    console.log('server is listening to port 4000');
});

// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

// app.listen(4000, () => {
//     console.log('server is listening to port 4000');
// });