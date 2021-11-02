const mongodb = require("@condor-labs/mongodb")();
const helperMongo = require("../utils/mongoHelper");
const serviceSchema = require("./service");

let washSchema = new mongodb.mongoose.Schema({
    idWorker: String,
    nameWorker: String,
    services: [],
    dateOfEntry: {
        type: Date,
        default: Date.now()
      }
});

const dbConnection = helperMongo.clients[process.env.MONGO_NAME_CONNECTION]; // I got the name of the connection from mongoDbSettings
let washModel = dbConnection.model("wash", washSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = washModel;