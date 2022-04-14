##myapp

1. Install NodeJS
2. go to this project directory and install the node dependencies: npm install
3. load the folder in vs.code
4. start debugging (F5)
5. open a web browser and go to http://localhost:8080/index.html

-- Kafka messages

To write the search term to Kafka go into routes/google.js and set
const use_kafka = true;

To run a kakfa server install docker then do:
docker-compose -f docker-compose.yml up -d

Follow the instructions on this page to create the topic:

https://towardsdatascience.com/how-to-install-apache-kafka-using-docker-the-easy-way-4ceb00817d8b
(start with "Connect to Kafka shell")


Todo:

1. Edit index.html to skin it to make it look more like mycigna.com
2. Add a search box that then passes the entered value to the API.  Add "Site:mdlive.com" to the search term to limit the search.  I don't know if you can add a few sites by adding multiple site: designations in the search team
3. Format the returned values to make them appear cleaner and appear as HTML links
4. Find an off the shelf kafka client that can connect to the topic and display the messages w/o writing the client ourselves

Good luck everyone!!!

-kevin




