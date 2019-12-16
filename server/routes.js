const express = require('express')
import { addAsync } from '@awaitjs/express'
const router = addAsync(express.Router())

import ExampleController from './controller/ExampleController'
import CoffeeController from './controller/CoffeeController'
import UserController from './controller/UserController'

router.route('/example').get((...args) => ExampleController.exampleGetRequest(...args))
router.route('/example').post((...args) => ExampleController.examplePostRequest(...args))

// Coffee routes
router.getAsync('/coffee', async (...args) => CoffeeController.getAllCoffee(...args) ) 
router.getAsync('/coffee/:id', async (...args) => CoffeeController.getCoffeeById(...args))
router.postAsync('/coffee', async (...args) => CoffeeController.postCoffee(...args))
router.postAsync('/coffee/:id/vote', async (...args) => CoffeeController.postVoteForCoffee(...args))
router.patchAsync('/coffee/:id/vote', async (...args) => CoffeeController.patchVoteForCoffee(...args))
router.patchAsync('/coffee/:id', async (...args) => CoffeeController.patchCoffee(...args))
router.deleteAsync('/coffee/:id', async (...args) => CoffeeController.deleteCoffee(...args))

router.route('/user').get((...args) => UserController.getAllUsers(...args))
router.route('/user/:id').get((...args) => UserController.getUserById(...args))
router.route('/user').post((...args) => UserController.postUser(...args))
router.route('/user/:id').delete((...args) => UserController.deleteUser(...args))

module.exports = router
