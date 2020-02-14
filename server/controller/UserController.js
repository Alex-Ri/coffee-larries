import UserService from '../service/UserService'

class UserController {
	constructor() {}

	async getAllUsers(_, res) {
		return this._respond(res, { status: 200,  body: await UserService.queryAllUsers() })
	}

	async getUserById(req, res) {
		const { id } = req.params
		return this._respond(res, { status: 200, body: await UserService.queryUserById(id) })
	}

	async postUser(req, res) {
		const { body } = req
		return this._respond(res, { status: 201, body: await UserService.createNewUser(body) })
	}

	async patchUser(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 200, body: await UserService.updateExistingUser(id, body) })
	}

	async postPaidEntryForUser(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 201, body: await UserService.addPaidEntryToUser(id, body) })
	}

	async postConsumedCoffeeForUser(req, res) {
		const { id } = req.params
		const { body } = req
		return this._respond(res, { status: 201, body: await UserService.addConsumedCoffeeToUser(id, body) })
	}

	async deleteUser(req, res) {
		const { id } = req.params
		return this._respond(res, { status: 200, body: await UserService.deleteUser(id) })
	}

	_respond(res, response) {
		const { status, body } = response
		res.status(status).json(body)
	}
}

export default new UserController()



	// async postVoteForCoffee(req, res) {
	// 	const { id } = req.params
	// 	const { body } = req
	// 	return this._respond(res, { status: 201, body: await CoffeeService.addVoteForCoffee(id, body) })
	// }

	// async patchVoteForCoffee(req, res) {
	// 	const { id } = req.params
	// 	const { body } = req
	// 	return this._respond(res, { status: 200, body: await CoffeeService.updateVoteForCoffee(id, body) })
	// }

	// async patchCoffee(req, res) {
	// 	const { id } = req.params
	// 	const { body } = req
	// 	return this._respond(res, { status: 200, body: await CoffeeService.updateExistingCoffee(id, body) })
	// } 