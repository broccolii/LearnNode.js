var router = require('koa-router')();


router.post('/', (ctx, next) => {
    console.log(`ctx.request.body = ${JSON.stringify(ctx.request.body)}`);
    console.log(`ctx.request.params = ${ctx.request.params}`);
    ctx.state = {
        title: 'koa2 title'
    };
    ctx.response.body = "post request succeed"
});

router.get('/', function(ctx, next) {
    console.log(ctx.params);
    console.log(ctx.request.params);
    ctx.body = 'get request succeed';
});

module.exports = router;
