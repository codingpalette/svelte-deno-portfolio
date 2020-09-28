import { RouterContext  } from "../deps.ts";


import Book from "../models/Book.ts";
import User from "../models/User.ts";

export class BookController {
    async getBooks(ctx: RouterContext) {
        const page = ctx.params.page;
        // const { value } = ctx.request.body({ type: 'json' });
        const books = await Book.findAll(page);
        // console.log(books)
        ctx.response.body = books;
    }

    async create(ctx: RouterContext) {
        const { value } = ctx.request.body({ type: 'json' });
        const { title, content } = await value;
        const user = ctx.state.user as User;
        const book = new Book(user.id, title, content);
        await book.create();
        ctx.response.status = 201;
        ctx.response.body = book;
    }
}


export default new BookController();
