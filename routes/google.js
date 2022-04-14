var express = require('express');
var googleIt = require('google-it');

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka1:9092', 'kafka2:9092']
})


const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })

var router = express.Router();

// To prevent connection errors until we have a kafka server running
const use_kafka = false;

/* GET users listing. */
router.get('/', function (req, res, next) {

    googleIt({ 'query': req.query['search'] }).then(results => {
        // ** write query['search'] to kafka topic here **
        if (use_kafka)
            producer.send({
                topic: 'test-topic',
                messages: [
                    { value: query['search'] },
                ],
            })


        res.send(results);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    })


});

module.exports = router;
