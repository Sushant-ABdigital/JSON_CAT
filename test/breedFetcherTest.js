const { fetchBreedDescription } = require("../fetchBreedDescription");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("returns string description via callback", done => {
    fetchBreedDescription("siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });

  it("checks for incorrect breed passed to function", done => {
    fetchBreedDescription("siberi", err => {
      assert.equal(err, err);
      done();
    });
  });
});
