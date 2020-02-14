import CoffeeConsumedSchemaEntry from './CoffeeConsumedSchemaEntry'
const Joi = require('joi')

const CoffeeConsumedSchema = Joi.object().options({ stripUnknown: true }).keys({
	totalEuro: Joi.number()
		.integer()
		.default(0),
	totalGramm: Joi.number()
		.integer()
		.default(0),
	histroy: Joi.array()
		.items(CoffeeConsumedSchemaEntry)
		.allow('', null)

})

export default CoffeeConsumedSchema
