const Joi = require("joi");

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("1-1-1988");

    const result = birthDateSchema.validate("12-28-2003")
    console.info(result);
    console.info(typeof result.value);
    console.info(typeof result.error);
  });
});
