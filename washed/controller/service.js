
const mongoDbHelper = require("../utils/mongoHelper");

const getArrayOnlyAttribures = (workersModels) =>{
    let workersAtt = [];

    workersModels.forEach(element => {
        workersAtt.push({
            _id:element._id,
            name:element.name,
            description:element.description,
            price:element.price,
            active:element.active,
            href:`services/${element._id}`,
        });
    });

    return workersAtt;
};

module.exports.list = async (event, context) => {
    let services = [];

    try{

        await mongoDbHelper.connect();

        const serviceModel = require("../models/service");

        services = await serviceModel.find({active:true});

        services = getArrayOnlyAttribures(services);

    }catch(error){
        console.log("ERROR LIST SERVICES");
        console.log(error);
    }

    return services;
};