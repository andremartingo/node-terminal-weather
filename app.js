const request = require("request");
const argv = require("./config");

var encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
);