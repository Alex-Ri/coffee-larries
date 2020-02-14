export default class Coffee {
	constructor(jsonCoffee) {
		this.id = jsonCoffee.id
		this.name = jsonCoffee.name
		this.brand = jsonCoffee.brand
		this.description = jsonCoffee.description
		this.image = jsonCoffee.image
		this.packageSize = jsonCoffee.packageSize
		this.price = jsonCoffee.price
		this.rating = jsonCoffee.rating
	}
}
