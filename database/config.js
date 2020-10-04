
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:eliyahu@localhost:5432/postgres')


// const { Client } = require('pg')
// const client = new Client({
//   host: 'postgres',
//   port: 5432,
//   user: 'postgres',
//   password: 'eliyahu',
// })
  
module.exports = db ;