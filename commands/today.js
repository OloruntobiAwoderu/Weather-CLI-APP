const ora = require("Ora");
const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");


module.exports = async (args) => {
    const spinner = ora().start();
    

    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location);

        spinner.stop();

        console.log(`current conditions in ${location.city}, ${location.country_code}:`);
        console.log(`\t${weather.weather[0].description}, ${(weather.main.temp - 273).toFixed(1)}C`)
    }
    catch(error){
            console.log(error);
    }

}