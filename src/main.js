const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaCors = require('@koa/cors');
const KoaMorgan = require('koa-morgan');
const KoaRouter = require('koa-router');
const config = require('./config/config');

const app = new Koa();
const router = new KoaRouter();

app.use(KoaBody());
app.use(KoaMorgan('combined'));
app.use(KoaCors());

app.use(router.allowedMethods());

app.listen(config.port, () => console.log(`Server is running at port ${config.port}`))