import { MongoClient } from "./deps.ts";

const client = new MongoClient();

client.connectWithUri(Deno.env.get("MONGOOSE_KEY") || "");

const db = client.database(Deno.env.get("DB_NAME") || "");

export default db;

export const userCollection = db.collection('users');
export const bookCollection = db.collection('books');




