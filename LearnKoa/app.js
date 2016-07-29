var Koa = require('koa');
var app = new Koa();


app.use((ctx, next) => {
    ctx.body = "wujignpeng"
    return next().then(() => {
      console.log('打印了 wujignpeng 要开始打印 时间了');
    })
})

app.use((ctx, next) => {
    var start = new Date();
    return next().then(() => {
        const ms = new Date - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
})

app.listen(3000);
