const Joi = require('joi')
import CoffeeConsumedSchema from './CoffeeConsumedSchema'
import PaidSchema from './PaidSchema'

// schema for the user object
// handles validaton and default values + removes unknown keys from requestBody
const UserSchema = Joi.object().options({ stripUnknown: true }).keys({
	name: Joi.string()
		.min(3)
		.max(30)
		.required(),
	lastname: Joi.string()
		.min(3)
		.max(30)
		.required(),
	email: Joi.string()
		.min(3)
		.email({ tlds: { allow: ['com', 'de'] } })
		.required(),
	role: Joi.string()
		.default('user'),
	isBanned: Joi.boolean()
		.default(false),
	profileImageURL: Joi.string()
		.default('')
		.allow('', null),
	coffeeConsumed: CoffeeConsumedSchema
		.default({ 
			totalEuro: 0, 
			totalGramm: 0,
			history: []
		}),
	paid: PaidSchema
		.default({ 
			totalEuro: 0, 
			history: []
		}),
	created: Joi.date().default(new Date())
})

export default UserSchema
