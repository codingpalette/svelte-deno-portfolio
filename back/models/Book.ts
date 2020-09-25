import {bookCollection} from "../mongo.ts";
import BaseModel from "./BaseModel.ts";

export default class book extends BaseModel {
    public id: string = "";

    constructor(
        public userId: string,
        public content: string,
    ) {
        super();
        this.userId = userId;
        this.content = content;
    }

    static async findAll(): Promise<book[]> {
        const surveys = await bookCollection.find();
        return surveys.map((book: any) => book.prepare(book));
    }

    async create() {
        delete this.id;
        const { $oid } = await bookCollection.insertOne(this);
        this.id = $oid;
        return this;
    }
}
