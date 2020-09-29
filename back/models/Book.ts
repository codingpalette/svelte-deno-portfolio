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
        const books = await bookCollection.find({});
        return books.map((book: any) => Book.prepare(book));
    }

    static async findByUser(userId: string): Promise<Book[]> {
        const books = await bookCollection.find({ userId });
        return books.map((book: any) => Book.prepare(book));
    }

    static async findOne(id: string): Promise<Book | null> {
        const book = await bookCollection.findOne({ _id: { $oid: id } });
        if (!book) {
            return null;
        }
        return Book.prepare(book);
    }

    async create() {
        delete this.id;
        const { $oid } = await bookCollection.insertOne(this);
        this.id = $oid;
        return this;
    }

    async update({ title, content }: { title: string; content: string }) {
        const { modifiedCount } = await bookCollection
            .updateOne({ _id: { $oid: this.id } }, {
                $set: { title, content },
            });

        if (modifiedCount > 0) {
            this.title = title;
            this.content = content;
        }
        return this;
    }


    delete() {
        return bookCollection.deleteOne({_id: { $oid: this.id }});
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
