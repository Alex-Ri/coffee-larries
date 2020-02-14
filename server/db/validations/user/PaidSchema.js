import PaidEntrySchema from './PaidEntrySchema'

const Joi = require('joi')

const PaidSchema = Joi.object().keys({
	totalEuro: Joi.number()
		.required(),
	history: Joi.array().items(
		PaidEntrySchema
	)
})

export default PaidSchema
