const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
 
const app = express()
 
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
const routes = require('./routes') 
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Coffee-Larries backend is listening on ${ port }`)
});
