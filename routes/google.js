var express = require('express');
var googleIt = require('google-it');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    googleIt({ 'query': req.query['search'] }).then(results => {
        // ** write query['search'] to kafka topic here **
        res.send(results);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    })


});

module.exports = router;
