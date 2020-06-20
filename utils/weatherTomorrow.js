const axios = require("axios");

module.exports = async (location) => {
    let result;
    try {
     result = await axios({
        method: "get",
        url: `http://api.apixu.com/v1/forecast.json?key=d075fcd878b7452492981030191604&q=${location.city}&days=2`,
        
    })
    } catch(error){
            console.log(error);
    }
     return result.data
    }