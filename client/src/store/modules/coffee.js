import Coffee from '../../models/Coffee'
import CoffeeService from '../../api/CoffeeService'

const state = {
	coffee: []
}

const getters = {
	getCoffees: () => state.coffee,
	getCoffeeById: () => id => state.coffee.filter(coffeeEntry => coffeeEntry.id === Number(id))[0]
}

const mutations = {
	setCoffee: (stateContext, coffee) => {
		stateContext.coffees = []
		// eslint-disable-next-line no-restricted-syntax
		for (const jsonCoffee of coffee) {
			stateContext.coffees.push(new Coffee(jsonCoffee))
		}
	}
}

const actions = {
	queryAllCoffee: (/* context*/) => {

	},
	createNewCoffee(context, payload) {
		const prepareCoffeeDataRequest = {
		}

		console.log('fired')

		CoffeeService.getCoffee()
	}
}

export default {
	namespaced: true,
	getters,
	mutations,
	actions,
	state
}
