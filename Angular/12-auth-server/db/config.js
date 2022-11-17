const mongoose = require("mongoose");

const dbConnectionStr = async() => {
  try {

    await mongoose.connect( process.env.DBConnectionStr );
    console.log('DB Online');
  } catch (error) {
    console.log(error);
    throw new Error('Error when initializing DB');
  };

}

module.exports = {
  dbConnectionStr
}