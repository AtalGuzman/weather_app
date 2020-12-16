const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=7bd2f47d4c36de5f55f684302841e028&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                uv: body.current.uv_index
            })
        }
    })
}


module.exports = forecast