//https://joi.dev/api/?v=17.6.0

//Joi nos permite crear planos de objetos Javascript
//que garantizan que procesamos y finalmente aceptamos datos precisos.

const Joi = require('joi');

let satellitesInfo = Joi.object().keys({
	name: Joi.string().required(),
	distance: Joi.number().required(),
	message: Joi.array().required(),
});
// satellites tiene un arreglo de satellitesInfo
export default Joi.object().keys({
	satellites: Joi.array().items(satellitesInfo),
});
