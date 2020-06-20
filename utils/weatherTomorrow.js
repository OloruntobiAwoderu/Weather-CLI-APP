const axios = require("axios");
require('dotenv').config()

module.exports = async (location) => {
    let result;
    try {
     result = await axios({
        method: "get",
        url: `http://api.apixu.com/v1/forecast.json?key=${process.env.KEY}&q=${location.city}&days=2`,
        
    })
    } catch(error){
            console.log(error);
    }
     return result.data
    }