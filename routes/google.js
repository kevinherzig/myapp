var express = require('express');
var googleIt = require('google-it');

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})


const producer = kafka.producer()
var router = express.Router();

// To prevent connection errors until we have a kafka server running, set this to FALSE
const use_kafka = false;

if (use_kafka)
    producer.connect();

/* GET search results */
router.get('/', function (req, res, next) {
    if (use_kafka)
        producer.send({
            topic: 'first_kafka_topic',
            messages: [
                { value: req.query['search'] },
            ],
        });


    googleIt({ 'query': req.query['search'] }).then(results => {
        res.send(results);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    })


});

module.exports = router;
