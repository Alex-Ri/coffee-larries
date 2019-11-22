export default class Example {

	constructor() {
		this._id = 'randombla'
		this._name = 'randomName'
	}

	get id() { return this._id }
	get name() { return this._name }

	set id(newId) { this._id = newId }
	set name(newName) { this._name = newName }

	getJSON() {
		const { id, name } = this
		return { id, name }
	}
}
