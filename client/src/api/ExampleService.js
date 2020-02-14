import APIService from './APIService'

class ExampleService extends APIService{
	constructor() {
		super('http://localhost:4000/api/example')
	}

	getExampleMessage() {
		const requestPaylaod = { url: `${ this._serviceURL }`, httpMethod: 'get' }
		this.performRequest(requestPaylaod)
	}

	postExampleMessage() {
		const requestPaylaod = { url: `${ this._serviceURL }`, httpMethod: 'post', requestBody: { 'testKey': 'testValue' } }
		this.performRequest(requestPaylaod)
	}
}

export default new ExampleService()
