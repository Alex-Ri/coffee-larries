import JoiValidationException from '../exceptions/JoiValidationException'
import BadRequestException from '../exceptions/BadRequestException'
import CoffeeSchema from '../db/validations/coffee/CoffeeSchema'
import VoteSchema from '../db/validations/coffee/VoteSchema'

const Coffee = require('../entity/Coffee')

class CoffeeService {
	constructor() {}

	async queryAllCoffee() {
		return await Coffee.getAll()
	}

	async queryCoffeeById(id) {
		return await Coffee.getById(id)
	}

	async createNewCoffee(coffeeRequestBody) {
		// remove attributes which are not allowed to update in this method 
		this._removeAttributesFromRequestBodyForCreation(coffeeRequestBody)
		// validate coffee with joi and create when successful 
		const validatedCoffee = this._validate(coffeeRequestBody, CoffeeSchema)
		return await Coffee.create(validatedCoffee)
	}

	async addVoteForCoffee(id, voteRequestBody) {
		const validatedVote = this._validate(voteRequestBody, VoteSchema)
		validatedVote.created = new Date()

		const coffee = await Coffee.getById(id)

		this._applyRatingToCoffee(coffee, validatedVote)

		// the result here is not necessary since we just got the coffee from the db
		// validation only checks if the vote is unique
		this._validate(coffee, CoffeeSchema)

		return await Coffee.addVote(coffee)
	}

	async updateVoteForCoffee(id, voteRequestBody) {
		const validatedVote = this._validate(voteRequestBody, VoteSchema)
		validatedVote.updated = new Date()

		const coffee = await Coffee.getById(id)
		this._removeRatingFromCoffee(coffee, validatedVote)

		this._applyRatingToCoffee(coffee, validatedVote)

		return await Coffee.addVote(coffee)
	}

	async updateExistingCoffee(id, reqBody) {
		const updateObject = this._getAttributesToUpdate(reqBody)
		this._checkForExclusionsInUpdate(updateObject)

		return await Coffee.update(id, updateObject)
	}

	async deleteCoffee(id) {
		const deletedCoffee = await Coffee.deleteWithId(id)
		return `Successfully deleted coffee with id: ${ deletedCoffee._id }.`
	}

	_buildResponseBody({ status, body }) {
		return ({ status, body })
	}

	// by default we have a vote rating for every coffee which looks like this:
	// { value: 3.0, votes: [ { userId: 'default', value: 3.0 } ]}
	// this will be created by Joi, so we exclude the rating attribute from the requestBody
	// other attributes can be included in the array 'exclusions'
	_removeAttributesFromRequestBodyForCreation(coffeeToCreate) {
		const exclusions = [ 'rating' ]
		for(const exclusion of exclusions) {
			if(exclusion in coffeeToCreate) 
				delete coffeeToCreate[exclusion]
		}
	}

	_validate(vote, schema) {
		const result = schema.validate(vote)

		if(result.error)
			throw new JoiValidationException(result.error.details[0])
	
		return result.value
	}

	_applyRatingToCoffee(coffee, vote) {
		let { rating } = coffee
		rating.votes.push(vote)
		rating.value = this._calculateRatingValue(rating)
	}

	_removeRatingFromCoffee(coffee, vote) {
		let { votes } = coffee.rating
		const { userId } = vote

		coffee.rating.votes = votes.filter( voteObject => {
			return voteObject.userId !== userId
		})
	}

	_calculateRatingValue(rating) {
		return rating.votes.reduce( (a, b) => {
			return a + b.value
		}, 0) / rating.votes.length
	}

	_getAttributesToUpdate(reqBody) {
		const allAvailableAttributes = CoffeeSchema._inner.children
		let updateObject = {}

		allAvailableAttributes.forEach( attribute => {
			const attributeKey = attribute.key
			const { [attributeKey]: attributeValue }  = reqBody
			if(attributeValue)
				updateObject[attributeKey] = attributeValue
		})

		return updateObject
	}	

	_checkForExclusionsInUpdate(updateObject) {
		const exclusions = [ 'rating' ]
		let foundExclusions = []
		for(const exclusion of exclusions) {
			if(exclusion in updateObject) 
				foundExclusions.push(exclusion)
		}

		if(foundExclusions.length >= 1) 
			throw new BadRequestException(`You are not allowed to update ${ foundExclusions.join(', ') }.`)
	}
}

export default new CoffeeService()
