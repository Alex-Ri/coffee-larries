const Joi = require('joi')

const PaidEntrySchema = Joi.object().options({ stripUnknown: true }).keys({
	paymentMethod: Joi.string()
		.required()
		.valid('paypal', 'cash'),
	value: Joi.number()
		.required(),
	date: Joi.date()
})

export default PaidEntrySchema
