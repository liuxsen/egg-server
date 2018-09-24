import {Context} from 'egg';

export default function notFoundHandler(){
  return async (ctx:Context,next)=>{
    await next();
    if(ctx.status === 404 && !ctx.body){
      ctx.body= {
        error: 'not found'
      }
    }
  }
}
