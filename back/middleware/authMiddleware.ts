import { RouterContext, validateJwt } from "../deps.ts";
import User from "../models/User.ts";

export const authMiddleware = async (ctx: RouterContext, next: Function) => {
    const headers = ctx.request.headers;

    const jwt = headers.get("Authorization");
    if (!jwt) {
        ctx.response.status = 401;
        return;
    }

    // const authHeader = headers.get("Authorization");
    // if (!authHeader) {
    //     ctx.response.status = 401;
    //     return;
    // }
    // const jwt = authHeader.split(" ")[1];
    // if (!jwt) {
    //     ctx.response.status = 401;
    //     return;
    // }
    const key: any = Deno.env.get("JWT_SECRET_KEY")
    const data : any = await validateJwt({jwt, key , algorithm: "HS256"});
    if (data) {
        const user = await User.findOne({ email: data.payload.iss });
        ctx.state.user = user;
        await next();
    } else {
        ctx.response.status = 401;
    }
};
