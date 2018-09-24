import { Application,Context } from 'egg'

export default function errorHandler(option:any,app:Application){
  return async function(ctx:Context,next){
    try{
      await next();
    }catch(err){
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error',err);
      const status = err.status || 500;
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      ctx.body = {error};
      ctx.status = status;
    }
  }

}
