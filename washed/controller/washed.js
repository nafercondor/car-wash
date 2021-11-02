
const mongoDbHelper = require("../utils/mongoHelper");

const validateForm = (form) =>{
    
    if(!form.services){
        return `service is required.`;
    }

    if(!form.idWorker){
        return `idWorker is required.`;
    }

    if(!form.nameWorker){
        return `idWorker is required.`;
    }

    if(!Array.isArray(form.services)){
        return `service is not array.`;
    }

    return '';
   
    
};

module.exports.save = async (form) => {

    try{

        let message = validateForm(form);

        if(message){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message:message
                })
              };
        }

        await mongoDbHelper.connect();

        const washModel = require("../models/washed");

        let newWashed = new washModel(form);

        let isWasched = await newWashed.save();

        return {
            statusCode: 201,
            body: JSON.stringify({
                message:'Saved successful',
                data: isWasched
            })
          };
       

    }catch(error){
        console.log("ERROR SAVE WASHED");
        console.log(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message:'Error save washed',
                data: error
            })
          };
    }  
};