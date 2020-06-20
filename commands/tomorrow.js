const ora = require("Ora");
const getWeather = require("../utils/weatherTomorrow");
const getLocation = require("../utils/location");


module.exports = async (args) => {
    const spinner = ora().start();
    

    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location);

        spinner.stop();

        console.log(`Tomorrow's weather condition in ${location.city}, ${location.country_code}:`);
        console.log(`\t${weather.forecast.forecastday[1].day.condition.text}, ${weather.forecast.forecastday[1].day.avgtemp_c}C`)
    }
    catch(error){
            console.log(error);
    }

}