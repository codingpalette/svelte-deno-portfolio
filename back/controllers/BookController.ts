import { RouterContext, makeJwt, Jose, Payload, setExpiration } from "../deps.ts";
import { hashSync, compareSync } from "../deps.ts";

import GustBook from "../models/Book.ts";
import User from "../models/User.ts";

export class BookController {
    async getGusts(ctx: RouterContext) {
        const { value } = ctx.request.body({ type: 'json' });
    }

    async create(ctx: RouterContext) {
        const { value } = ctx.request.body({ type: 'json' });
        const { content } = await value;
        const user = ctx.state.user as User;
        const book = new GustBook(user.id, content);
        await book.create();
        ctx.response.status = 201;
        ctx.response.body = book;
    }
}


export default new BookController();
