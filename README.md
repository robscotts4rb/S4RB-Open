# S4RB Task - Adrian Eyre #

## Index
* [Task Outline](#Task)
* [User Stories](#Story)
* [Thought Process](#thought)
* [JavaScript with jQuery](#jquery)
* [Ruby with Sinatra](#sinatra)
* [JavaScript with Angular](#angular)
* [Screenshots](#Shots)

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
I would like to view missing months with the CPMU as 0.00000
```

## <a name="thought">Thought Process</a>

I have solved this task with three different solutions. The first was using JavaScript and jQuery, the second Ruby with Sinatra the the third with JavaScript and Angular. Each version is fully tests in it retrospective test framework with unit and feature tests. The Angular version was used to experiment with using the framework. I have submitted all three solutions to show different coding in each of the frameworks.

### Steps taken
I started by creating the user stories from the task that was given to me, breaking them down into manageable chunks.

My main objective for this task was to write clean DRY manageable code that met the task specification.

I incorporated the MVC model for both the JavaScript and Ruby versions splitting the dependencies out into classes. Each part of the MVC model is separated into their respective folders so that the code is easily read and maintained. Instance methods were used throughout the project meaning that less memory is needed to execute the code.

Good software craftsmanship was used throughout the project such as dependency injecting other classes into the class so that each class had a single responsibility.

Tests were put into place before any code was written so that it was clear what was needed to be produced before implementing code.

### Class Structure
JSONApi

| Class | Description |
|---- | ---- |
| readApi()     | Reads Json object and returns data |

CPMU

| Class | Description |
|---- | ---- |
| calculate    | Calculate CPMU
| quarter      | Calculate quarterly figure
| quartile     | Calculate quartile index
| display_date | Display formatted date
| check_error  | Error checking
| complaints   | Calculate any missing months

## <a name="server">Json Server</a>
<b> Please Note </b> This Json Server uses the latest version of the Json file that has the following format
```
{"Quarter": "1", "Month": "2012-01-01T00:00:00", "Complaints": 27, "UnitsSold": 4932508 }
```

### Setup
The internal json rest api can be hosted locally using the following commands:

```
$ npm install -g json-server
$ json-server --watch db/db.json

Open http://localhost:3000/CPMU in your web browser
```

## <a name="jquery">JavaScript with jQuery</a>
This version is coded using JavaScript as the language with jQuery controlling the interactive elements of the page. It has been broken down into different classes with single responsibilities and easily extendable.

### Setup
The JavaScript with jQuery can be hosted locally using the following commands:
```
$ cd Javascript
```
Running the Jasmine test
```
Open SpecRunner.html in your web browser
```
Running the web application
```
Open index.html in your web browser
```

## <a name="sinatra">Ruby with Sinatra</a>
This version is coded using Ruby and the Sinatra framework which is a light weight web framework using RESTful technologies. The classes are broken down into models that all have single responsibilities and easily extendable.

### Setup
The Ruby with Sinatra can be hosted locally using the following commands:
```
$ cd Ruby
$ bundle
$ rvm 2.3.3
```
Running the Rspec test
```
$ rspec
```
Running the web application
```
$ ruby ./app/controller.rb
Open http://localhost:4567 in your web browser
```

## <a name="angular">JavaScript with Angular</a>
This version is also coded in JavaScript using the Angular framework using a controller and web page for a single page application.

### Setup
The JavaScript with Angular can be hosted locally using the following commands:
```
$ cd Angular
```
Running the web application
```
Open index.html in your web browser
```

## <a name="Shots">Screenshots</a>
### Monthly view
![Screenshot 1](/Images/screenshot1.png "Screenshot 1")

### Quarterly View
![Screenshot 2](/Images/screenshot2.png "Screenshot 2")
