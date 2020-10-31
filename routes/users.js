var express = require('express');
var router = express.Router();
const loginController = require('../controllers/usersController') ;
var multer  = require('multer') ;
let storage = multer.memoryStorage()
var upload = multer({ storage: storage })

/* GET users listing. */
router.get('/login/:email/:password', loginController.login);  // login 

router.post('/signup', loginController.signup); // signup

router.post('/updateProfile',upload.single('profile-img'), loginController.updateProfile); 


module.exports = router;  
