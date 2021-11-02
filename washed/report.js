
const reportController = require("./controller/report");

const getFilter = (queryStringParameters) => {
    let filters = {};
    let to = null;
    let from = null;

    if(queryStringParameters){
        if(queryStringParameters.to){
           to = new Date(`${queryStringParameters.to}T23:59:59.000Z`);
        }

        if(queryStringParameters.from){
            from = new Date(`${queryStringParameters.from}T00:00:00.000Z`);
         }

         if(queryStringParameters.idWorker){
            filters.idWorker = queryStringParameters.idWorker;
         }

        if(from && to){
            filters.dateOfEntry = {
                $gte: from,
                $lt: to
            }
        }

    };

    return filters;

};

module.exports.handler = async (event, context) => {
    let services = [];

    try{

        let parameters = event.queryStringParameters;

        let filters = getFilter(parameters);

        services =  await reportController.report(filters);
        services.parameters = parameters;

    }catch(error){
        console.log("ERROR LIST REPORT");
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(services),
    };
  
};