
const serviceeController = require("./controller/service");

module.exports.handler = async (event, context) => {
    let services = [];

    try{

        services =  await serviceeController.list();

    }catch(error){
        console.log("ERROR LIST SERVICES");
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(services),
    };
  
};