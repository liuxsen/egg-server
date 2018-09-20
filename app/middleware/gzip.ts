// import isJson from 'koa-is-json';
import { isJSON } from 'koa-is-json';
import { createGzip } from 'zlib';

async function gzip(ctx, next) {
  await next();

  // 后续中间件执行完成后将响应体转换成 gzip
  let body = ctx.body;
  if (!body) {
    return;
  }
  if (isJSON(body)) {
    body = JSON.stringify(body);
  }

  // 设置 gzip body，修正响应头
  const stream = createGzip();
  stream.end(body);
  ctx.body = stream;
  ctx.set('Content-Encoding', 'gzip');
}

export default gzip;
