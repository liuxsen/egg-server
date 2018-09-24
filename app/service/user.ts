import {Service} from 'egg';

function toInt(str){
  if(typeof str === 'number'){
    return str;
  }
  if(!str) return str;
  return parseInt(str, 10) || 0;
}

export default class User extends Service{
  // 新建user
  public async create(){
    const {ctx} = this;
    const body = ctx.request.body
    const oUserQuery = {
      id: '',
      name: body.name,
      age: body.age,
      email: body.email,
      phone: body.phone,
      sex: body.sex,
      password: body.password,
      created_at: new Date(),
      updated_at: new Date(),
    }
    // 校验查询参数
     this.ctx.validate({
      phone: 'string',
      password: 'string'
    }, oUserQuery)
    // 查询数据库是否有相同用户
    const bHasUser = await ctx.model.User.findOne({
      where:{
        phone: oUserQuery.phone
      }
    })
    console.log(bHasUser)
    if(bHasUser){
      return false
    }
    const newUser = await ctx.model.User.create(oUserQuery);
    return newUser;
  }
  // 查看user list、
  public async list(){
    const {ctx} = this;
    const oQuery = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    }
    const userList = await ctx.model.User.findAll(oQuery);
    return userList;
  }
  // 登录
  public async login(){
    const {ctx} = this;
    const oQueryBody = ctx.request.body;
    const errors = this.ctx.validate({
      phone: 'string',
      password: 'string'
    },oQueryBody)
    if(errors){
      throw new Error(errors)
    }
    const bHasUser = await ctx.model.User.findOne({
      where: oQueryBody
    })
    return bHasUser
  }
}
