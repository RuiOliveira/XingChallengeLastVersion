# Application

## Story

Please build a project that ensures a rigid testing plan of the following REQRES API: **[https://reqres.in/](https://reqres.in/).**

You’ll find the REST operations permitted in the link provided. Exploit the greater coverage as possible with all possible scenarios in mind.

# Strategy

After some search i decide to create a node project and then i choose some tools.

Supertest (https://www.npmjs.com/package/supertest) for testing HTTP requests;
Mocha javascript framework running on node to make asynchronous testing
Chai as BDD assertion library with should format

In order two create the test cases i try to adapt a page object model. So, I create a test folder and inside i create two folders:
request-definition based on supertest framework template where i create the request to reqres and assertion definition, page-objects folder was created in order to organize the body responses and facilitate possible future maintenance.

Reporting in only user mocha-reporter framework in order create pretty-prints and the user and the user can debug.


# How to run project

To run the project locally first you need to install the npm packages:

npm install

Run the tests:

npm test

Notes:

In case of tests that we need to send some data update(Post and patch http methods) of create (Put http method) I had thought to implement some tests in order to validate sending wrong data (login-request >> should login successful invalid parameters). In this cases even when i send wrong request values the response is the same and in my point of view the test should fail.

# Run the project on docker:

Source: 
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Build docker image

Test locally docker running:
docker build -t 'container_name' . 

# Run docker image

docker run 'container_name'