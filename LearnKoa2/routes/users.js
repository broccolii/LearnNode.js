var router = require('koa-router')();

router.get('/', function(ctx, next) {
    console.log(ctx.params);
    console.log(ctx.request.params);
    ctx.body = 'this a users resposne';
});

module.exports = router;
