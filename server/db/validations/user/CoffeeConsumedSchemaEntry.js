const Joi = require('joi')

const CoffeeConsumedEntrySchema = Joi.object().options({ stripUnknown: true }).keys({
	coffeeId: Joi.string()
		.required(),
	name: Joi.string()
		.required(),
	gramm: Joi.number()
		.required(),
	euro: Joi.number()
		.required(),
	created: Joi.date()
		.default(new Date())
})

export default CoffeeConsumedEntrySchema
