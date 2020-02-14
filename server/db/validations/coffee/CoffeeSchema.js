const Joi = require('joi')
import RatingSchema from './RatingSchema'
 
// schema for the coffee object
// handles validaton and default values + removes unknown keys from requestBody
const CoffeeSchema = Joi.object().options({ stripUnknown: true }).keys({
	name: Joi.string()
		.min(3)
		.max(30)
		.required(),
	brand: Joi.string()
		.min(3)
		.required(),
	description: Joi.string()
		.min(3)
		.default('')
		.allow('', null),
	taste: Joi.string()
		.min(3)
		.default('')
		.allow('', null),
	origin: Joi.string()
		.min(3)
		.max(30)
		.default('')
		.allow('', null),
	packageSize: Joi.number()
		.required(),
	price: Joi.number()
		.integer()
		.required(),
	imageURL: Joi.string()
		.required(),
	rating: RatingSchema.default({ value: 3.0, votes: [ { userId: 'default', value: 3.0 } ]}),
	created: Joi.date().default(new Date())
})

export default CoffeeSchema