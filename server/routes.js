var express = require('express')
var router = express.Router()

import ExampleController from './controller/ExampleController'
import CoffeeController from './controller/CoffeeController'
import UserController from './controller/UserController'

router.route('/example').get(ExampleController.exampleGetRequest)
router.route('/example').post(ExampleController.examplePostRequest)

router.route('/coffee').get(CoffeeController.getAllCoffee)
router.route('/coffee/:id').get(CoffeeController.getCoffeeById)
router.route('/coffee').post(CoffeeController.postCoffee)
router.route('/coffee/:id').delete(CoffeeController.deleteCoffee)

router.route('/user').get(UserController.getAllUsers)
router.route('/user/:id').get(UserController.getUserById)
router.route('/user').post(UserController.postUser)
router.route('/user/:id').delete(UserController.deleteUser)

module.exports = router
