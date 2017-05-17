# Interview Questions #

Imagine you have been tasked by the Account Manager to create a basic reporting application that will allow the account manager to view complaints via a online portal.
The company already has an internal json rest api that stores all the complaints that the business has recieved and the number of corresponding sales in that period.

The internal json rest api can be hosted locally using the following commands:

```shell
$ npm install -g json-server

$ json-server --watch db/db.json
```

## 1. Develop a basic reporting portal using any frameworks you see fit for purpose.

![Example Reporting Porta](/example-2.png "Example Reporting Portal")

## 2. Allow the ability for the user to toggle Quarter and Month consolidation.

For example:

|Month       | CPMU|
|---------- | ----------| 
|01 January 2012|	5.47388874|
|01 February 2012|	57.65682657|
|01 March 2012|	12.12591551|
|01 May 2012|	67.77995238|
|01 June 2012|	93.67857009|

Should be displayed as:

|Quarter       | CPMU|
|---------- | ----------|
|1|	7.186971458|
|2|	82.6888992|


## 3. Within the report there are missing months when data are not available, these days should be displayed as 0.

For example:

Month       | Amounts
---------- | ----------|
|01 February 2012|	57.65682657|
|01 March 2012|	12.12591551|
|01 May 2012|	67.77995238|
|01 June 2012|	93.67857009|

Should be displayed as:

|Month       | Amounts
|---------- | ----------|
|01 February 2012|	57.65682657|
|01 March 2012|	12.12591551|
|01 April 2012|	0.00000|
|01 June 2012|	93.67857009|
|01 July 2012|	57.29516406|

## Instructions - T.N

Npm install, run the json server as per instructions at the top of the readme.

Run server - port 60809

```
$ npm run server
```

Run tests

```
$ npm run tests
```
