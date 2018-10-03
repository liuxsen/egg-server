import { Controller } from "egg";
import { sign } from "jsonwebtoken";

export default class UserController extends Controller {
  // 查询用户列表
  public async list() {
    const { ctx } = this;
    const data = await ctx.service.user.list();
    ctx.body = data;
  }
  // 用户注册
  public async register() {
    const { ctx } = this;
    const user = await ctx.service.user.create();
    console.log("注册", user);

    if (user) {
      const token = sign(user, "liuxsen", {
        expiresIn: 60 * 60 * 1000 * 24 * 7
      });

      console.log(token);
      ctx.cookies.set("token", token);
      ctx.body = {
        status: {
          code: 0
        },
        result: {
          user
        }
      };
    } else {
      ctx.body = {
        status: {
          code: 402,
          msg: "用户已经存在"
        }
      };
    }
  }
}
