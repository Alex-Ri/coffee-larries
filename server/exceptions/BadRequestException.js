import ExtendedError from './ExtendedError'

export default class BadRequestException extends ExtendedError {
	constructor(message) {
		super({ httpStatus: 400, name: 'BadRequestException', message })
	}
}
