const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
 
const app = express()

app.use(bodyParser.json(), express.static(path.join(__dirname, 'client/build')))
 
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
const routes = require('./routes') 
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Coffee-Larries backend is listening on ${ port }`)
});
