const koaRouter = require('koa-router');
const mailControllers = require('../controllers/mail');

const router = new koaRouter();

router.post('/mail', mailControllers.mail);

module.exports = router;