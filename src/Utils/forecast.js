const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3138d8e74df64c181310faf348405bc8&query=${latitude},${longitude}&units=f`;
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'The temperature is: ' + response.body.current.temperature)
        }
    })
}

module.exports = forecast

