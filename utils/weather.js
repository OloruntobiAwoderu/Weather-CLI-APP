const axios = require("axios");

module.exports = async (location) => {
    let result;
    try {
     result = await axios({
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country_code}&APPID=e5466fedce2aa8ecb98b8dae8ddb5480`,
        
    })
    } catch(error){
            console.log(error);
    }
     return result.data
    }