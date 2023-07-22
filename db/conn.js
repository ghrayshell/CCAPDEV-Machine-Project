import { MongoClient } from 'mongodb';

//string for the local host
const mongoURI = "mongodb://localhost:27017";
const client = new MongoClient(mongoURI);

//connect to MongoDB client
//initial connection to the MongoDB process.
export function connectToMongo(callback) {
    //connect to client
    client.connect().then( (client) => {
        return callback();
    }).catch( err => {
        callback(err);
    })
}

//return an instance of the database with the specified name
export function getDB(dbName = "showcase"){
    return client.db(dbName);
}

//closing MongoDB client
function signalHandler(){
    console.log("Closing MongoDB connection...");
    client.close();
    process.exit();
}