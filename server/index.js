const express = require('express')
const cors = require('cors')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const dotenv =  require('dotenv')
const app = express()

dotenv.config()

app.use('/', serveStatic(path.join(__dirname, '../client/dist')))

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000
const routes = require('./routes') 
app.use('/api', routes)

// TODO: optimize error handling
app.use( (error, req, res, next) => {
	if(error instanceof Error) {
		if(error.httpStatus) {
			return res.status(error.httpStatus).json({
				type: error.name,
				error: error.message
			})
		}
		return res.status(500).json({
			error: error.message
		})
	}
	next(error)
})

app.listen(port, () => {
    console.log(`Coffee-Larries backend is listening on ${ port }`)
})
