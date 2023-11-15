const { check, body } = require("express-validator");
module.exports = [
  ///firstName
  check("child.firstName")
    .notEmpty()
    .withMessage("Ingrese el nombre de su hijo/a.")
    .isAlpha("es-ES")
    .withMessage("El nombre no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El nombre no puede tener mas de 20 letras")
    .escape(),
  ///para lastName
  check("child.lastName")
    .notEmpty()
    .withMessage("Ingrese el apellido de su hijo/a.")
    .isAlpha("es-ES")
    .withMessage("El apellido no puede tener numeros ni caracteres especiales.")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener como minimo 2 letras.")
    .isLength({ max: 20 })
    .withMessage("El apellido no puede tener mas de 20 letras")
    .escape(),
  body("child.gender")
    .optional()
    .isIn(["male", "female"])
    .withMessage("El genero solo puede ser masculino o femenino")
    .escape(),
  body("child.birthDate")
    .optional()
    .custom((value) => {
      if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        throw new Error(
          "La fecha de nacimiento debe ser una fecha válida en el formato (YYYY-MM-DD)"
        );
      }
      return true;
      //Esta función custom evalua que se pase una fecha en el formato correspondiente
    })
    .escape(),
  body("child.age")
    .optional()
    .isNumeric()
    .withMessage("La edad debe ser un numero")
    .isFloat({ min: 0, max: 18 })
    .withMessage("La edad debe estar entre 0 y 18 años")
    .escape(),
];
