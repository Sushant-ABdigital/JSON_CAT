const { fetchBreedDescription } = require("./fetchBreedDescription");
const breed = process.argv.slice(2).join("");

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});
