const request = require("request");
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    if (error) {
      callback(`error while fecthing details: ${error}`, null);
    }
    const data = JSON.parse(body);
    const desc = data[0].description.trim();
    if (desc) {
      callback(null, desc);
    } else {
      callback(`Failed to find ${desc} from api`, null);
    }
  });
};

module.exports = {fetchBreedDescription};
