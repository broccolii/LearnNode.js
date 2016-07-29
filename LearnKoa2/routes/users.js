var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a broccoliii response!';
});

module.exports = router;
