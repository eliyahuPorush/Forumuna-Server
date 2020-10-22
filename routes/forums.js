const express = require('express');
const router = express.Router();
const forumsController = require('../controllers/forumsController');

router.get('/getPosts', forumsController.getPosts);

router.post('/addNewForum', forumsController.addForum ) ;

router.post('/addAnswer', forumsController.addAnswer)  ;

router.get('/getUserPosts/:userID', forumsController.getUserPosts) ;

router.delete('/deletePost/:postID', forumsController.deletePost) ;

router.get('/getAnswers/:postId', forumsController.getAnswers) ;

module.exports = router;


