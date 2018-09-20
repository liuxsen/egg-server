import { Controller } from 'egg';

export default class UserController extends Controller {
    public async login () {
        const { ctx } = this;
        ctx.body = await ctx.service.user.login({name: 'foo', password: 'xxx'});
    }
    public async register () {
        const { ctx } = this;
        ctx.body = 'register';
    }
};
