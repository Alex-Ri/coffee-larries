const monk = require('monk')
const connectionString = process.env.MONGODB_URI || 'localhost/coffeeLarries'
const db = monk(connectionString)

db.then( () => {
	console.log('Connected correctly to db.')
})
 
module.exports = db
