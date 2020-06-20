const axios = require("axios");
require('dotenv').config()

module.exports = async (location) => {
    let result;
    try {
     result = await axios({
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country_code}&APPID=${process.env.APP_ID}`,
        
    })
    } catch(error){
            console.log(error);
    }
     return result.data
    }