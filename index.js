import { MongoClient, ObjectId } from "mongodb";
import mongoURI from "./credentials.js";

const connection = new MongoClient(mongoURI);
await connection.connect();

const practiceDB = connection.db("c11-practice")

// CRUD: Create
async function insertData(data){ // Insert a document
    const resultInsert = await practiceDB.collection("practice-collection").insertOne(data)
    console.log(resultInsert)
}

async function readAll(){
    const readAll = await practiceDB.collection("practice-collection")
        .find({})
        .limit(10)
        .toArray()
    return readAll
}
console.log(await readAll())

connection.close();