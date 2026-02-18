import * as Joi from "joi";

const MovieValidator = Joi.object({
    movieName: Joi.string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\s]{1,20}$/)
        .required()
        .messages({
            "string.pattern.base": "Only Latin and Cyrillic letters are allowed &  must be at least 1 character.",
            "string.base": "MovieName must be a string.",
            "string.empty": "MovieName field cannot be empty.",
            "string.min": "MovieName must be at least 1 character long.",
            "string.max": "MovieName cannot exceed 20 characters.",
        }),
})

export default MovieValidator;