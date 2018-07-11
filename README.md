# Application

## Story

Please build a project that ensures a rigid testing plan of the following REQRES API: **[https://reqres.in/](https://reqres.in/).**

You’ll find the REST operations permitted in the link provided. Exploit the greater coverage as possible with all possible scenarios in mind.

##Strategy

After some searchs i decide to cretae a node project and then i choove some tools.

Supertest (https://www.npmjs.com/package/supertest) for testing HTTP requests;
Mocha javascript framework running on node to make asynchronous testing
Chai as BDD assertion library with should format

In order two create the test cases i try to adapt a page object model. So, I create a test folder and inside i create two folders:
request-definition based on supertest framework template where i create the request to reqres and assertion definition, page-objects folder was created in order to organize the body responses and facilitate possible future maintenance. I used lodash in order to avoid Undefined res data which avoid that our tests blow up.

Reporting in only user mocha-reporter framework in order create pretty-prints and the user and the user can debug.


##How to run project

To run the project locally first you need to install the npm packages:

npm install

Run the tests:

npm test

Notes:

In case of tests that we need to send some data update(Post and patch http methods) of create (Put http method) I had thought to implement some tests in order to validate sending wrong data (login-request >> should login successful invalid parameters). In this cases even when i send wrong request values the response is the same and in my point of view the test should fail.

##Run the project on docker:

Source: 
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

##Build docker image

Test locally:
$ docker build -t <your username>/node-web-app .

$ docker build -t <docker name>

##Run docker image

Test locally:
$ docker run -p 49160:8080 -d <your username>/node-web-app

docker run -p 8080:8081 dockerName