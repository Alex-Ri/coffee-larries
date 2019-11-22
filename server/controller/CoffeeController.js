import Coffee from '../model/Coffee'

class CoffeeController {
	constructor() {}

	getAllCoffee(req, res) {
		res.status(200).json({
			coffee: this.coffee
		})
	}

	getCoffeeById(req, res) {
		const { id } = req.params

		// GET BY ID
	}

	postCoffee(req, res) {
		const { body } = req
		// CREATE COFFEE

		res.status(201).send('Successfully craeted new coffee.')
	}

	deleteCoffee(req, res) {
		const { id } = req.params
		// DELETE COFFEE
		res.status(200).send('Successfully deleted coffee.')
	}

}

export default new CoffeeController()
