var express = require('express')
var router = express.Router()

import ExampleController from './controller/ExampleController'

router.route('/example').get(ExampleController.exampleGetRequest)

module.exports = router
