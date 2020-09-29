import { RouterContext } from "../deps.ts";
import Book from "../models/Book.ts";
import User from "../models/User.ts";

export default class BaseBookController {
    async findBookOrFil(
        id: string,
        ctx: RouterContext,
    ) : Promise<Book | null> {
        const book: Book | null = await Book.findOne(id);

        if (!book) {
            ctx.response.status = 404;
            ctx.response.body = { message: "개시글 아이디가 없습니다." };
            return null;
        }
        const user = ctx.state.user as User;
        // If survey does not belong to current user, return with 403
        if (book.userId !== user.id) {
            ctx.response.status = 403;
            ctx.response.body = {
                message: "서로의 아이디가 올바르지 않습니다.",
            };
            return null;
        }
        return book;
    }
}
