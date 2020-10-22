const functions = require('firebase-functions');
const express = require('express') ;
const app = require('../app.js'); ;
const app1 = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
app1.get('/hello', (req, res)  => {
    res.send(JSON.stringify('hello world'))
})


exports.helloWorld = functions.https.onRequest(app1) ;

exports.app = functions.https.onRequest(app) ;
