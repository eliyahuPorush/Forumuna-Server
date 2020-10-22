
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:eliyahu@localhost:5432/postgres')

module.exports = db ;