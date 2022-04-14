// CignaSearch API POC by AA (Architects Anonymous)
// 
// This uses a google search scraper module called google-it to search google for some results
// and return them in an JSON array.
// 
// We likely could move this to Google Search API but there are some complexities there so for 
// this simple test-n-learn this seemed the most expedient way to accomplish this.
// 
// This module accepts the search team and performs a search.  It could be expanded to include
// other content in the future.
// 
// The intent would be to allow this module to present a list of curated search results.  It could
// also return other directives such as to look to enroll a patient into our new app environment
// or to recommend an outreach from a health coach.


var express = require('express');

// Poor mans google search component
var googleIt = require('google-it');

// Load the Kafka module
const { Kafka } = require('kafkajs')

// Create the kafka object
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

// Create the producer object
const producer = kafka.producer()


// To prevent connection errors until we have a kafka server running, set this to FALSE
const use_kafka = false;

// Flag so you can run this w/o having to connect to kafka
if (use_kafka)
    producer.connect();

//  Connect our router to the express environment
var router = express.Router();

// Connect to the express route
router.get('/', function (req, res, next) {

    // Potentially capture search term and stream out for analytics capture
    if (use_kafka)
        producer.send({
            topic: 'first_kafka_topic',
            messages: [
                { value: req.query['search'] },
            ],
        });

    // Call the google-it module to get results
    googleIt({ 'query': req.query['search'] }).then(results => {
        // send the results back
        res.send(results);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
        // really should return some error JSON here
    })


});

module.exports = router;
