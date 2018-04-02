import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    router.get('/builder', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/builder', ctx.query);
      ctx.respond = false;
    });

    router.get('*', async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server.use(async (ctx, done) => {
      ctx.res.statusCode = 200;
      await done();
    });

    server.use(router.routes());
    server.listen(port, () => {
      // console.log(`> Ready on http://localhost:${port}`);
    });
  });
