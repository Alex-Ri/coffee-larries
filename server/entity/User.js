import NotFoundException from '../exceptions/NotFoundException'

const db = require('../db/connection')
const user = db.get('user')

const getAll = () => {
	console.info(`Query all user from DB.`)
    return user.find()
} 

const getById = async (_id) => {
	console.info(`Trying to query user with id: ${ _id } from DB.`)
	const foundUser = await user.findOne({ _id })
	if(foundUser) {
		console.info(`User with id ${ _id } found.`)
		return foundUser 
	}
	else _throwNotFoundException(_id)
}
 
const create = async (userToCreate) => {
	console.info(`Initialize user-creation...`)
	const createdUser = await user.insert(userToCreate)
	console.info(`Successfully created new user.`)
	return createdUser
}

const addPaidEntry = async (updatedUser) => {
	console.info(`Initialize paid-creation for user with id: ${ updatedUser._id }.`)	
	const userWithNewPaidEntry = await user.findOneAndUpdate({ _id: updatedUser._id }, { $set:  { paid: updatedUser.paid } } )
	if(userWithNewPaidEntry) {
		console.info(`Successfully added paidEntry to user with id: ${ updatedUser._id }.`)
		return userWithNewPaidEntry
	}
	else _throwNotFoundException(updatedUser._id)
}

const addConsumedCoffee = async (updatedUser) => {
	console.info(`Initialize consumedCoffe-creation for user with id: ${ updatedUser._id }.`)	
	const userWithNewConsumedCoffee = await user.findOneAndUpdate({ _id: updatedUser._id }, { $set:  { coffeeConsumed: updatedUser.coffeeConsumed } } )
	if(userWithNewConsumedCoffee) {
		console.info(`Successfully added paidEntry to user with id: ${ updatedUser._id }.`)
		return userWithNewConsumedCoffee
	}
	else _throwNotFoundException(updatedUser._id)
}

const update = async (_id, updateAttributes) => {
	console.info(`Trying to update user with ${ _id }.`)
	const updatedUser = await user.findOneAndUpdate({ _id }, { $set:  updateAttributes } )
	if(updatedUser) {
		console.info(`Successfully updated user with id: ${ _id }.`)
		return updatedUser 
	}
	else _throwNotFoundException(_id)
}

const deleteWithId = async (_id) => {
	console.info(`Trying to delete user with id: ${ _id } from DB.`)
	const deletedUser = await user.findOneAndDelete({ _id })
	if(deletedUser) {
		console.info(`User with id ${ _id } deleted.`)
		return deletedUser 
	}
	else _throwNotFoundException(_id)
}
 
const _throwNotFoundException = (_id) => {
	throw new NotFoundException(`User with ID: ${ _id } not found.`)
}

module.exports = {
	create,
	addPaidEntry,
	addConsumedCoffee,
	getById,
	getAll,
	deleteWithId,
	update
}
