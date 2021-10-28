
const mongoDbHelper = require("./utils/mongoHelper");
module.exports.handler = async (event, context) => {
  
    let c = await mongoDbHelper.connect();
  
    const userModelDB1 = require("./models/worker");
  
      await userModelDB1.findOne({});
      console.log("CONSULTA MONGO");
      console.log(await userModelDB1.findOne({}));

    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
};