const mongodb = require("@condor-labs/mongodb")();
const helperMongo = require("../utils/mongoHelper");

let workerSchema = new mongodb.mongoose.Schema({
    firstName: String,
    firstLastName: String,
    identificacion: String
});

const dbConnection = helperMongo.clients[process.env.MONGO_NAME_CONNECTION]; // I got the name of the connection from mongoDbSettings
let workerModel = dbConnection.model("worker", workerSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = workerModel;