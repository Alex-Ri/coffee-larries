import ExtendedError from './ExtendedError'

export default class JoiValiadtionException extends ExtendedError {
	constructor(message) {
		super({ httpStatus: 400, name: 'JoiValidationException', message })
	}
}
