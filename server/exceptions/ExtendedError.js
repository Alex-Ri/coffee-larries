export default class ExtendedError extends Error {
	constructor({ httpStatus, name, message }) {
		super(message)
		this.httpStatus = httpStatus
		this.name = name
		this.message = message
		console.error(this)
	}
}