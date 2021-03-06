import { RouterContext, makeJwt, Jose, Payload, setExpiration } from "../deps.ts";
import { userCollection } from "../mongo.ts";
import { hashSync, compareSync } from "../deps.ts";
import User from "../models/User.ts";

const header: Jose = {
    alg: "HS256",
    typ: "JWT",
};


export class AuthController {
    async register(ctx: RouterContext) {
        // const { value: { name, email, password } } = await ctx.request.body({ type: 'json' });
        const { value } = ctx.request.body({ type: 'json' });
        const { name, email, password } = await value;

        let user = await User.findOne({ email });
        if (user) {
            ctx.response.status = 422;
            ctx.response.body = { message: "이미 사용중인 이메일 입니다." };
            return;
        }
        const hashedPassword = hashSync(password);
        user = new User({ name, email, password: hashedPassword, level:1 });
        await user.save();
        ctx.response.status = 201;
        ctx.response.body = {
            id: user.id,
            name: user.name,
            email: user.email,
            level: user.level
        };
    }
    async login(ctx: RouterContext) {
        // const { value: { email, password } } = await ctx.request.body({ type: 'json' });
        const { value } = ctx.request.body({ type: 'json' });
        const { email, password } = await value;
        if (!email || !password) {
            ctx.response.status = 422;
            ctx.response.body = { message: "Please provide email and password" };
            return;
        }
        let user = await User.findOne({ email });
        if (!user) {
            ctx.response.status = 422;
            ctx.response.body = { message: "존재하지 않는 이메일 입니다." };
            return;
        }
        if (!compareSync(password, user.password)) {
            ctx.response.status = 422;
            ctx.response.body = { message: "Incorrect password" };
            return;
        }

        const payload: Payload = {
            iss: user.email,
            exp: setExpiration(
                Date.now() + parseInt(Deno.env.get("JWT_EXP_DURATION") || "0"),
            ),
        };
        const jwt = await makeJwt(
            { key: Deno.env.get("JWT_SECRET_KEY") || "", payload, header },
        );

        ctx.response.body = {
            id: user.id,
            name: user.name,
            email: user.email,
            level: user.level,
            jwt,
        };
    }
    async check(ctx: RouterContext) {
        const user: User = ctx.state.user as User;
        ctx.response.body = {
            id: user.id,
            name: user.name,
            email: user.email,
            level: user.level,
        };
    }
}

export default new AuthController();


