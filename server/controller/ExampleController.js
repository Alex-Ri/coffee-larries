import Example from '../model/Example'

class ExampleController {
	constructor() {}

	exampleGetRequest(req, res) {
		const example = new Example()
		
		res.status(200).json({
			message: 'nicer dicer!',
			example: example.getJSON()
		})
	}
}

export default new ExampleController()
