const axios = require("axios");

module.exports = async ( ) => {
    const results = await axios ({
        method: "get",
        url: "https://api.ipdata.co/?api-key=a4654d58a0b339d90edc60cf42b6a52e10678377b8b1f2a66b3f9e1a"
    });
    const { city, country_code } = results.data;
    return {
        city: city,
        country_code: country_code

    }
} 