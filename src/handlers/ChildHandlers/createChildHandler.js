const { createChild } = require('../../controllers/ChildControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  // const { firstName, lastName, gender, birthDate, age } = req.body;

  try {
    const child = await createChild(
      // firstName,
      // lastName,
      // gender,
      // birthDate,
      // age
      req.body.child
    );
    response(res, 201, { data: child });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
