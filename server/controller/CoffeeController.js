import CoffeeService from '../service/CoffeeService'

class CoffeeController {
	constructor() {}

	async getAllCoffee(_, res) {
		return this._respond(res, { status: 200,  body: await CoffeeService.queryAllCoffee() })
	}

	async getCoffeeById(req, res) {
		const { id } = req.params
		return this._respond(res, { status: 200, body: await CoffeeService.queryCoffeeById(id) })
	}

	async postCoffee(req, res) {
		const { body } = req
		return this._respond(res, { status: 201, body: await CoffeeService.createNewCoffee(body) })
	}

	async postVoteForCoffee(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 201, body: await CoffeeService.addVoteForCoffee(id, body) })
	}

	async patchVoteForCoffee(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 200, body: await CoffeeService.updateVoteForCoffee(id, body) })
	}

	async patchCoffee(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 200, body: await CoffeeService.updateExistingCoffee(id, body) })
	}

	async deleteCoffee(req, res) {
		const { id } = req.params
		return this._respond(res, { status: 200, body: await CoffeeService.deleteCoffee(id) })
	}

	_respond(res, response) {
		const { status, body } = response
		res.status(status).json(body)
	}
}

export default new CoffeeController()
