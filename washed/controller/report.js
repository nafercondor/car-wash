
const mongoDbHelper = require("../utils/mongoHelper");


const gerTotalServices = (services) =>{

    let total = 0;
    services.forEach(element => {
        total += element.price;
    });

    return total;
};

const calculateAmounts = (washes) =>{
    let washesDetail = [];
    let totalServices = 0;

    washes.forEach(element => {
        let priceTotalServices = gerTotalServices(element.services);
        washesDetail.push({
            idWorker:element.idWorker,
            nameWorker:element.nameWorker,
            services:element.services,
            dateOfEntry:element.dateOfEntry,
           totalServices : priceTotalServices
        });

        totalServices += priceTotalServices;
    });

    return {
        totalServices : totalServices,
        washes : washesDetail
    };
};

module.exports.report = async (filters) => {
    let washes = [];

    try{

        await mongoDbHelper.connect();

        const washedModel = require("../models/washed");

        washes = await washedModel.find(filters);

        washes = calculateAmounts(washes);

    }catch(error){
        console.log("ERROR LIST WASHES");
        console.log(error);
    }

    return washes;
};