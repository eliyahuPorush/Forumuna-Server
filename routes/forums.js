const express = require('express');
const router = express.Router();
const getPosts = require('../database/queries')

/* GET users listing. */
router.get('/getPosts', async function(req, res, next) {
    getPosts().then(data => {
        res.send(data);
    })
});

module.exports = router;
