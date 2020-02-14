import JoiValidationException from '../exceptions/JoiValidationException'
import BadRequestException from '../exceptions/BadRequestException'
import UserSchema from '../db/validations/user/UserSchema'
import PaidEntrySchema from '../db/validations/user/PaidEntrySchema'
import CoffeeConsumedSchemaEntry from '../db/validations/user/CoffeeConsumedSchemaEntry'

const User = require('../entity/User')

// TODO: create base Service class to avoid redundancy
class UserService {
	constructor() {}

	async queryAllUsers() {
		return await User.getAll()
	}

	async queryUserById(id) {
		return await User.getById(id)
	}

	async createNewUser(userRequestBody) {
		// remove attributes which are not allowed to update in this method 
		this._removeAttributesFromRequestBodyForCreation(userRequestBody)
		// validate user with joi and create when successful 
		const validatedUser = this._validate(userRequestBody, UserSchema)

		return await User.create(validatedUser)
	}

	async updateExistingUser(id, reqBody) {
		const updateObject = this._getAttributesToUpdate(reqBody)
		this._checkForExclusionsInUpdate(updateObject)

		return await User.update(id, updateObject)
	}

	async addPaidEntryToUser(id, paidRequestBody) {
		const validatedPaidEntry = this._validate(paidRequestBody, PaidEntrySchema)

		const user = await User.getById(id)

		this._applyPaidEntryToUser(user, validatedPaidEntry)

		return await User.addPaidEntry(user)
	}

	async addConsumedCoffeeToUser(id, consumedCoffeeRequest) {
		const validatedConsumedCoffee = this._validate(consumedCoffeeRequest, CoffeeConsumedSchemaEntry)

		const user = await User.getById(id)

		this._applyConsumedCoffeeToUser(user, validatedConsumedCoffee)

		return await User.addConsumedCoffee(user)
	}

	async deleteUser(id) {
		const deletedUser = await User.deleteWithId(id)
		return `Successfully deleted user with id: ${ deletedUser._id }.`
	}

	_buildResponseBody({ status, body }) {
		return ({ status, body })
	}

	// by default we have a vote rating for every coffee which looks like this:
	// { value: 3.0, votes: [ { userId: 'default', value: 3.0 } ]}
	// this will be created by Joi, so we exclude the rating attribute from the requestBody
	// other attributes can be included in the array 'exclusions'
	_removeAttributesFromRequestBodyForCreation(userToCreate) {
		const exclusions = [ 'role', 'isBanned' ]
		for(const exclusion of exclusions) {
			if(exclusion in userToCreate) 
				delete userToCreate[exclusion]
		}
	}

	_validate(toValidate, schema) {
		const result = schema.validate(toValidate)

		if(result.error)
			throw new JoiValidationException(result.error.details[0])
	
		return result.value
	}
	
	_applyPaidEntryToUser(user, paidEntry) {
		let { paid } = user
		paidEntry.created = new Date()
		paid.history.push(paidEntry)
		paid.totalEuro = this._calculateTotalPaid(paid.history)
	}

	_applyConsumedCoffeeToUser(user, consumedCoffeeEntry) {
		let { coffeeConsumed } = user
		consumedCoffeeEntry.created = new Date()
		coffeeConsumed.history.push(consumedCoffeeEntry)

		const coffeeConsumedObject = this._calculateTotalConsumedCoffee(coffeeConsumed.history)

		coffeeConsumed.totalEuro =  coffeeConsumedObject.totalEuro
		coffeeConsumed.totalGramm = coffeeConsumedObject.totalGramm
	}

	_calculateTotalPaid(history) {
		return history.reduce( (a, b) => {
			return a + b.value
		}, 0)
	}

	_calculateTotalConsumedCoffee(history) {
		let totalGramm = 0
		let totalEuro = 0

		history.forEach( coffee => {
			console.log(coffee)
			totalEuro += coffee.euro
			totalGramm += coffee.gramm
		})

		console.log(totalGramm)

		return { totalGramm, totalEuro }
	}

	_removeRatingFromCoffee(coffee, vote) {
		let { votes } = coffee.rating
		const { userId } = vote

		coffee.rating.votes = votes.filter( voteObject => {
			return voteObject.userId !== userId
		})
	}

	_getAttributesToUpdate(reqBody) {
		const allAvailableAttributes = UserSchema._inner.children
		let updateObject = {}
		allAvailableAttributes.forEach( attribute => {
			const attributeKey = attribute.key
			const { [attributeKey]: attributeValue }  = reqBody

			if(attributeValue !== undefined)
				updateObject[attributeKey] = attributeValue
		})
		return updateObject
	}	

	_checkForExclusionsInUpdate(updateObject) {
		const exclusions = [ 'coffeeConsumed', 'paid', 'created' ]
		let foundExclusions = []
		for(const exclusion of exclusions) {
			if(exclusion in updateObject) 
				foundExclusions.push(exclusion)
		}

		if(foundExclusions.length >= 1) 
			throw new BadRequestException(`You are not allowed to update ${ foundExclusions.join(', ') }.`)
	}
}

export default new UserService()
