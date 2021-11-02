
const mongoDbHelper = require("../utils/mongoHelper");

const getArrayOnlyAttribures = (workersModels) =>{
    let workersAtt = [];

    workersModels.forEach(element => {
        workersAtt.push({
            _id:element._id,
            firstName:element.firstName,
            firstLastName:element.firstLastName,
            identificacion:element._id,
            href:`workers/${element._id}`,
        });
    });

    return workersAtt;
};

module.exports.list = async (event, context) => {
    let workers = [];

    try{

        await mongoDbHelper.connect();

        const workersModel = require("../models/worker");

        workers = await workersModel.find({});

        workers = getArrayOnlyAttribures(workers);

    }catch(error){
        console.log("ERROR LIST WORKERS");
        console.log(error);
    }

    return workers;
  
};