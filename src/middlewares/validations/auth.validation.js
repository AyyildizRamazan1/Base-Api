const joi = require("joi");
const APIError = require("../../utils/errors");

class authValidation {
  constructor() {}
  static register = async (req, res, next) => {
    try {
      await joi
        .object({
          name: joi.string().trim().min(3).max(100).required().messages({
            "string.base": "İsim alanı normal metin olmalıdır.",
            "string.empty": "İsim alanı boş olamaz",
            "string.min": "İsim alanı en az 3 karakter olmalıdır ",
            "string.max": "İsim alanı en fazla 100 karakterden oluşabilir",
            "string.required": "İsim alanı zorunludur",
          }),
          lastname: joi.string().trim().min(3).max(100).required().messages({
            "string.base": "Soyisim alanı normal metin olmalıdır.",
            "string.empty": "Soyisim alanı boş olamaz",
            "string.min": "Soyisim alanı en az 3 karakter olmalıdır ",
            "string.max": "Soyisim alanı en fazla 100 karakterden oluşabilir",
            "string.required": "Soyisim alanı zorunludur",
          }),
          email: joi
            .string()
            .email()
            .trim()
            .min(3)
            .max(100)
            .required()
            .messages({
              "string.base": "Email alanı normal metin olmalıdır.",
              "string.empty": "Email alanı boş olamaz",
              "string.min": "Email alanı en az 3 karakter olmalıdır ",
              "string.email": "Lütfen geçerli bir email giriniz",
              "string.max": "Email alanı en fazla 100 karakterden oluşabilir",
              "string.required": "Email alanı zorunludur",
            }),
          password: joi.string().trim().min(6).max(36).required().messages({
            "string.base": "Şifre alanı normal metin olmalıdır.",
            "string.empty": "Şifre alanı boş olamaz",
            "string.min": "Şifre alanı en az 6 karakter olmalıdır ",
            "string.max": "Şifre alanı en fazla 36 karakterden oluşabilir",
            "string.required": "Şifre alanı zorunludur",
          }),
        })
        .validateAsync(req.body);
    } catch (error) {
      if (error.details && error?.details[0].message)
        throw new APIError(error.details[0].message, 400);
      else throw new APIError("Lütfen validasyon kurallarına uyun", 400);
    }
    next();
  };
}

module.exports = authValidation;
