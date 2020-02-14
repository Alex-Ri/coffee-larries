import Example from '../entity/Example'

class ExampleController {
	constructor() {}

	exampleGetRequest(req, res) {
		const example = new Example()
		
		res.status(200).json({
			message: 'nicer dicer!',
			example: example.getJSON()
		})
	}

	examplePostRequest(req, res) {
		console.log(req.body)
		res.status(201).send(`Retrieved ${ req.body } successfully!`)
	}
}

export default new ExampleController()
