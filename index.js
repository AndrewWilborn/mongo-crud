import { MongoClient, ObjectId } from "mongodb";
import mongoURI from "./credentials.js";

const connection = new MongoClient(mongoURI);
await connection.connect();

const practiceDB = connection.db("c11-practice")

// CRUD: Create
async function insertData(document){ // Insert a document, takes a JSON object as an argument
    const resultInsert = await practiceDB.collection("practice-collection").insertOne(document)
    return resultInsert
}

// CRUD: Read
async function readAll(){
    const readAll = await practiceDB.collection("practice-collection")
        .find({})
        .limit(10)
        .toArray()
    return readAll
}

// CRUD: Update
async function updateOne(id, newData){
    const updateOne = await practiceDB.collection("practice-collection")
        .updateOne(
            {_id: new ObjectId(id)},
            {$set: newData}
        )
    return updateOne
}


// Crud: Delete
async function deleteOne(id){
    const deleteOne = await practiceDB.collection("practice-collection")
        .deleteOne({_id: new ObjectId(id)})
    return deleteOne
}

console.log(await readAll())
// console.log(await deleteOne('648b7c1a68f59f7fc7a6a772'))
// console.log(await insertData({id:1,name:"dr. perky"}))
// console.log(await updateOne('648b7836c486e473b29fe483', {name:"dr. perky"}))


connection.close();