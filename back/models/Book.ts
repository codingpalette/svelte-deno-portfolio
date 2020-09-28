import {bookCollection} from "../mongo.ts";
import BaseModel from "./BaseModel.ts";

export default class Book extends BaseModel {
    public id: string = "";

    constructor(
        public userId: string,
        public title: string,
        public content: string,
    ) {
        super();
        this.userId = userId;
        this.title = title;
        this.content = content;
    }

    static async findAll(page: any): Promise<Book[]> {
        // const books = await bookCollection.find({}).skip((page - 1) * 5).limit(5);
        const books = await bookCollection.find({}).skip((page - 1) * 5).limit(5);
        return books.map((book: any) => Book.prepare(book));
    }

    async create() {
        delete this.id;
        const { $oid } = await bookCollection.insertOne(this);
        this.id = $oid;
        return this;
    }

    static prepare(data: any): Book {
        data = BaseModel.prepare(data);
        const book = new Book(
            data.userId,
            data.title,
            data.content,
        );
        book.id = data.id;
        return book;
    }
}
