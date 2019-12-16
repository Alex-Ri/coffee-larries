import User from '../entity/User'

class UserController {
	constructor() {}

	getAllUsers(req, res) {
		res.status(200).json({
			users: this.users
		})
	}

	getUserById(req, res) {
		const { id } = req.params

		// GET USER BY ID
	}

	postUser(req, res) {
		const { body } = req
		// CREATE USER

		res.status(201).send('Successfully craeted new user.')
	}

	deleteUser(req, res) {
		const { id } = req.params
		// DELETE USER
		res.status(200).send('Successfully deleted user.')
	}

}

export default new UserController()
