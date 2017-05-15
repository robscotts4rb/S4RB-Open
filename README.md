# S4RB Task #

## Index
* [Task Outline](#Task)
* [User Stories](#Story)
* [Thought Process](#thought)
* [Javascript with jQuery](#jquery)
* [Ruby with Sinatra](#sinatra)
* [Javascript with Angular 2](#angular)

## <a name="Task">Task Outline</a>
Imagine you have been tasked by the Account Manager to create a basic reporting application that will allow the account manager to view complaints via a online portal.
The company already has an internal json rest api that stores all the complaints that the business has recieved and the number of corresponding sales in that period.

## <a name="Story">User Stories</a>
```
As an Account Manager
So that I can improve the server to our customers
I would like to view complaint figures
```
```
As an Account Manager
So that I know the complaint figures each month
I would like to view complaint listed monthly
```
```
As an Account Manager
So that I know the complaint figures each quarter
I would like to view complaint listed quarterly
```
```
As an Account Manager
So that I know each month has data
I would like to view month with 0 complaints as 0.00000000
```

## <a name="thought">Thought Process</a>

The brief asked for this task to develop a portal using any framework and I I knew you use JavaScript I chose this language to code the task.  I have also submitted a Ruby version that is fully tested and coded. I’ve included an Angular 2 version that I used to experiment with using the framework.

### Steps taken
I started by creating the user stories from the task that was given to me, breaking them down into manageable chunks.

I incorporated the MVC model for both the JavaScript and Ruby versions splitting the dependencies out into classes. Good software craftsmanship was used through the project such as dependency injecting other classes into the class so that each class had a single purpose.

Class hierarchy wasn’t used in this project as it was a small simple program and was not needed.

Tests were put into place before any code was written so that it was clear what was needed to be produced before implementation of code.

### Class Structure
|JSONApi       |
|----|
|readApi()     | Reads Json object and returns data |


## <a name="server">Json Server</a>
### Setup
The internal json rest api can be hosted locally using the following commands:

```shell
$ npm install -g json-server

$ json-server --watch db/db.json
```

## <a name="jquery">Javascript with jQuery</a>

## <a name="sinatra">Ruby with Sinatra</a>

## <a name="angular">Javascript with Angular 2</a>


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
