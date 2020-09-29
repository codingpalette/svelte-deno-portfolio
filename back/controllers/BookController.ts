import { RouterContext  } from "../deps.ts";


import Book from "../models/Book.ts";
import User from "../models/User.ts";
import BaseBookController from "./BaseBookController.ts";

export class BookController extends BaseBookController{
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

    async delete(ctx: RouterContext) {
        const id : string = ctx.params.id!;
        const book: Book | null = await this.findBookOrFil(id, ctx);
        if (book) {
            await book.delete();
            ctx.response.status = 204;
        }
    }
}


export default new BookController();
