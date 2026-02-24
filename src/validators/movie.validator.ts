import * as Joi from "joi";

const MovieValidator = Joi.object({
    movieName: Joi.string()
        .trim()
        .min(1)
        .max(30)
        .pattern(/^(?!^[.,\-!?])[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ0-9\s!?:,\-]+$/)
        .required()
        .messages({
            "string.pattern.base": "Invalid start or characters",
            "string.max": "Maximum 30 symbols allowed",
            "string.empty": "Search field is empty"
        }),
})

export default MovieValidator;