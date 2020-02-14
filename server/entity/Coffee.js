import NotFoundException from '../exceptions/NotFoundException'
const db = require('../db/connection')
const coffee = db.get('coffee')
 
const getAll = () => {
	console.info(`Query all coffee from DB.`)
    return coffee.find()
}

const getById = async (_id) => {
	console.info(`Trying to query coffee with id: ${ _id } from DB.`)
	const foundCoffee = await coffee.findOne({ _id })
	if(foundCoffee) {
		console.info(`Coffee with id ${ _id } found.`)
		return foundCoffee 
	}
	else _throwNotFoundException(_id)
}
 
const create = async (coffeeToCreate) => {
	console.info(`Initialize coffee-creation...`)
	const createdCoffee = await coffee.insert(coffeeToCreate)
	console.info(`Successfully created new coffee.`)
	return createdCoffee
}

const addVote = async (updatedCoffee) => {
	console.info(`Initialize vote-creation for coffee with id: ${ updatedCoffee._id }.`)	
	const coffeeWithVote = await coffee.findOneAndUpdate({ _id: updatedCoffee._id }, { $set:  { rating: updatedCoffee.rating } } )
	if(coffeeWithVote) {
		console.info(`Successfully added vote to coffee with id: ${ updatedCoffee._id }.`)
		return coffeeWithVote
	}
	else _throwNotFoundException(updatedCoffee._id)
}

const update = async (_id, updateAttributes) => {
	console.info(`Trying to update coffee with ${ _id }.`)
	const updatedCoffee = await coffee.findOneAndUpdate({ _id }, { $set:  updateAttributes } )
	if(updatedCoffee) {
		console.info(`Successfully updated coffee with id: ${ _id }.`)
		return updatedCoffee 
	}
	else _throwNotFoundException(_id)
}

const deleteWithId = async (_id) => {
	console.info(`Trying to delete coffee with id: ${ _id } from DB.`)
	const deletedCoffee = await coffee.findOneAndDelete({ _id })
	if(deletedCoffee) {
		console.info(`Coffee with id ${ _id } deleted.`)
		return foundCoffee 
	}
	else _throwNotFoundException(_id)
}
 
const _throwNotFoundException = (_id) => {
	throw new NotFoundException(`Coffee with ID: ${ _id } not found.`)
}

module.exports = {
	create,
	addVote,
	getById,
	getAll,
	deleteWithId,
	update
}
