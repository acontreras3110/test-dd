const Joi = require('joi');

let satellites = Joi.object().keys({
    name: Joi.string().required(),
    distance: Joi.number().required(),
    message: Joi.array().required(),
})

export default Joi.object().keys({
    satellites: Joi.array().items(satellites),
})



