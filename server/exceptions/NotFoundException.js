import ExtendedError from './ExtendedError'

export default class NotFoundException extends ExtendedError {
	constructor(message) {
		super({ httpStatus: 404, name: 'NotFoundException', message })
	}
}
