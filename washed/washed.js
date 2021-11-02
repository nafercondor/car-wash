
const washedController = require("./controller/washed");

module.exports.handler = async (event, context) => {

  try {
    let dataWashed = JSON.parse(event.body);
    return await washedController.save(dataWashed);

  } catch (error) {
    console.log("ERROR SAVE WASHED");
    console.log(error);

    return {
      statusCode: 500,
      body: error
    };
  }

};