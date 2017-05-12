# Interview Questions #

Imagine you have been tasked by the Account Manager to create a basic reporting application that will allow the account manager to view payments via a online portal.
The company already has an internal json rest api that stores all the payments that the business has taken.

The internal json rest api can be hosted locally using the following commands:
```shell
src\$ npm install -g json-server

src\$ json-server --watch db\db.json
```

#1. Develop a basic reporting portal using any frameworks you see fit for purpose.
![Example Reporting Porta](/example-2.png "Example Reporting Portal")

#2. Allow the ability for the user to toggle day consolidation for Payments of the same day.

For example:-

|Date       | Amounts|
|---------- | ----------| 
|04/01/2015 | 33.06779|
|04/01/2015 | 67.77988|
|05/01/2015 | 93.67872|


Should be displayed as:

|Date       | Amounts|
|---------- | ----------|
|04/01/2015 | 100.84767|
|05/01/2015 | 93.67872|

#3. Within the report there are missing days for when payments are not made, these days should be displayed as 0.

For example:-

Date       | Amounts
---------- | ----------|
12/01/2015 | 134.07635 
17/01/2015 | 3.539273

Should be displayed as:

|Date       | Amounts
|---------- | ----------|
|12/01/2015 | 134.07635 |
|13/01/2015 | 0.0000|
|14/01/2015 | 0.0000|
|15/01/2015 | 0.0000|
|16/01/2015 | 0.0000|
|17/01/2015 | 3.539273|
