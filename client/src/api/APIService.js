import axios from 'axios'

export default class APIService {
	static _serviceURL 

	constructor(serviceURL) {
		this._serviceURL = serviceURL
	}

	performRequest(requestPayload) {
		const { url, httpMethod, requestBody = {} } = requestPayload
		return axios[httpMethod](url, requestBody).then( response => {
			console.log(response.data)
			return response.data
		}, err => {
			console.error(err)
			return err
		})
	}
}
