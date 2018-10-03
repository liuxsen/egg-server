import { verify } from "jsonwebtoken";
import { Application, Context } from "egg";
export default function authToken(option: any, app: Application) {
  return async function(ctx: Context, next) {
    try {
      const sRequestUrl = ctx.request.url;
      console.log(sRequestUrl);
      if (sRequestUrl !== "/users/login" && sRequestUrl !== "/users/register") {
        const token = ctx.cookies.get("token");
        console.log("---------------");
        console.log(token);
        const userInfo = verify(token, "liuxsen");
        if (userInfo) {
          ctx.userInfo = userInfo;
        } else {
          ctx.body = {
            status: 402,
            msg: "请先登录"
          };
        }
      } else {
        await next();
      }
    } catch (err) {
      ctx.body = { err };
    }
  };
}
