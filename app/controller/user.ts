import { Controller } from 'egg';

export default class UserController extends Controller {
  // 查询用户列表
  public async list(){
    const { ctx } = this;
    const data = await ctx.service.user.list()
    ctx.body = data;
  }
  // 新建用户
  public async register(){
    const {ctx} = this;
    const user = await ctx.service.user.create();
    if(user){
      ctx.body = user;
    }else{
      throw new Error('用户已经存在');
    }
  }
};
