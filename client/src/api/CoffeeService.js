import APIService from './APIService'

class CoffeeService extends APIService {
	constructor() {
		super('http://localhost:4000/api/coffee')
	}

	getCoffee() {
		const requestPayload = { url: `${ this._serviceURL }`, httpMethod: 'get' }
		return this.performRequest(requestPayload)
	}

	getCoffeeById() {
  	const requestPayload = { url: `${ this._serviceURL }`, httpMethod: 'get' }
  	return this.performRequest(requestPayload)
	}

	postCoffee() {
		const requestPayload = { url: `${ this._serviceURL }`, httpMethod: 'post', requestBody: { 'testKey': 'testValue' } }
		return this.performRequest(requestPayload)
	}
}

export default new CoffeeService()
