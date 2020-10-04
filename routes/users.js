var express = require('express');
var router = express.Router();
const loginController = require('../controllers/usersController')

/* GET users listing. */
router.get('/login/:email/:password', loginController.login);  // login 
router.get('/signup/:name/:email/:password/:passwordConfirm/:alies', loginController.signup); // signup
module.exports = router;  
