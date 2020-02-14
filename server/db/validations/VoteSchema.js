const Joi = require('joi')

const VoteSchema = Joi.object().options({ stripUnknown: true }).keys({
	userId: Joi.string()
		.allow('', null)
		.required(),
	value: Joi.number()
		.min(1.0)
		.max(5.0)
		.required()
		.allow('', null)
})

export default VoteSchema