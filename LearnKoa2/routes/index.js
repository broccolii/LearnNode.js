var router = require('koa-router')();

router.get('/', function foo(ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };
  return ctx.render('index', {
  });
});

module.exports = router;
