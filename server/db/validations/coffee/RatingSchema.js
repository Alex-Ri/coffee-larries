const Joi = require('joi')
import VoteSchema from './VoteSchema'

const RatingSchema = Joi.object().options({ stripUnknown: true }).keys({
	value: Joi.number()
		.positive()
		.min(1.0)
		.max(5.0)
		.allow('', null),
	votes: Joi.array()
		.items(VoteSchema)
		.unique( (a, b) => a.userId === b.userId )
		.allow('', null),
	created: Joi.date().default(new Date())
})

export default RatingSchema
