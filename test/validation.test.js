const Joi = require("joi");

describe("Joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("Tian");
    if (result.error) {
      console.info(result.error);
    }
  });

  it('should can validate basic data type', () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().required().min(1000).max(1000000);

    const resultUsername = usernameSchema.validate("tian@gmail.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("true");
    console.info(resultIsAdmin);

    console.info(typeof "true");
    console.info(typeof resultIsAdmin.value);
    console.info(typeof resultIsAdmin.error);

    const resultPrice = priceSchema.validate("10000");
    console.info(resultPrice);
  });
});
