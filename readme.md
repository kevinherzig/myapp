##myapp

1. Install NodeJS
2. go to this project directory and install the node dependencies: npm install
3. load the folder in vs.code
4. start debugging (F5)
5. open a web browser and go to http://localhost:8080/index.html

The primary code is in routes/google.js.  This is the module that gets called when you ask for /google.  

The NodeJS server will first look for any defined 'routes' or paths handled explicity by a router.  If it doesn't find a route then it looks in /public for a file that matches.  This is why /index.html will load index.html out of the public folder but /google will invoke the code in routes/google.js


-- Kafka messages howto ---

By default kafka messages are disabled so that you can work on the html even if you don't have a kafka server running.

To write the search term to Kafka go into routes/google.js and set
const use_kafka = true;

To install and run a kakfa server install docker then do:
docker-compose -f docker-compose.yml up -d

Follow the instructions on this page to create the topic:

https://towardsdatascience.com/how-to-install-apache-kafka-using-docker-the-easy-way-4ceb00817d8b
(start with "Connect to Kafka shell")


Todo:

1. Edit index.html to skin it to make it look more like mycigna.com
2. Add a search box to index.html that then passes the entered value to the API.  Look at the javascript code in that file, you'll have to read the content of the search box.
3. Add "Site:mdlive.com" or some site to the search term to limit the search.  I don't know if you can add a few sites by adding multiple site: designations in the search team.
4. When passing a typed in search term to the APi by encoding it in the URL make sure the term is properly escaped by calling encodeURIComponent() to convert spaces and special characters to the HTML % based escape codes.  Look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
5. Format the returned values to make them appear cleaner and appear as HTML links
6. Find an off the shelf kafka client that can connect to the topic and display the messages w/o writing the client ourselves, or crate a client in .net or something.

Good luck everyone!!!

-kevin




