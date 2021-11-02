
const workerController = require("./controller/worker");

module.exports.handler = async (event, context) => {
    let workers = [];

    try{

        workers = await workerController.list();

    }catch(error){
        console.log("ERROR LIST WORKERS");
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(workers),
    };
  
};