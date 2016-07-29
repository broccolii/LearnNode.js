
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(require('koa-static')(__dirname + '/public'));




app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use((ctx, next) => {
    var start = new Date();
    return next().then(() => {
        const ms = new Date - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});

router.use('/index', index.routes(), index.allowedMethods());
router.use('/users/:id', users.routes(), users.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', (err, ctx) => {
  console.log(err)
  logger.error('server error', err, ctx);
});

app.listen(3000);
module.exports = app;
