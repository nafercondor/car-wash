const mongodb = require("@condor-labs/mongodb")();
const helperMongo = require("../utils/mongoHelper");

let serviceSchema = new mongodb.mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    active: Boolean
});

const dbConnection = helperMongo.clients[process.env.MONGO_NAME_CONNECTION]; // I got the name of the connection from mongoDbSettings
let serviceModel = dbConnection.model("service", serviceSchema); // then I am able to create a my model based on the connection object that I got using my helper

module.exports = serviceModel;