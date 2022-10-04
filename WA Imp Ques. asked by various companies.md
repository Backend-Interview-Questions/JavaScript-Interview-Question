==>   Node js

1. What is Node Js?

2. How NodeJs work?

3. What is architecture of Node js?

4. What is the core module in node js? 

5. Node js single thread or multi-thread and how it handles tasks

4. What is Node Js Event emitter? (.emit and .on method only)

5. What is module, library and framework?

6. What is express framework? How our server connect without express?



9. Why you are using currying in nodejs?

 
About event driven development in node using event diameter
How ur generally dealing with exceptions like unhandled exceptions in node application.. precautionary step for it
About package.json file.. it's content and sections under it
While selecting node version there is a term LTS ..it's stands for?
What is microtask queue in NodeJs 
12. Explain Event loop in Nodejs
What is Event Driven Architecture in Node.js ?
2. What is REPL in nodejs with example. 
3. Create node.js server




### =============================[MongoDB]=============================


| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [What is mongo db?](#what-is-mongo-db?)                                                                                                                                              | 
| 2.  |  [What is mongoose (Explain)?](#what-is-mongoose-(explain)?)                                                                                                                                                       |
| 3.  | [Why we use mongoose?](#why-we-use-mongoose?)                                                                                                                                           |
| 4.  | [Did know about schema validation](#did-know-about-schema-validation?)                                                                                                                              |
| 5.  | [Which execute first schema validation or mongodb query](#which-execute-first-schema-validation-or-mongodb-query?)                                                                                                        |
| 6.  |  [what is indexing in mongoDB?(Is there indexing in mongodb)?](#what-is-indexing-in-mongoDB?(Is-there-indexing-in-mongodb)?)                                      |
| 7.  |  [How do you connect to mongodb? What is the syntax?](#How-do-you-connect-to-mongodb?-What-is-the-syntax?)
| 8.  |  [Why do we use mongoose, if we have mongodb?](#Why-do-we-use-mongoose,-if-we-have-mongodb?)
| 9.  | [What is aggregation in mongodb?(aggregation pipeline in mongodb)](#What-is-aggregation-in-mongodb?(aggregation-pipeline-in-mongodb))
| 10. | [what is difference between mongodb and sql?](#what-is-difference-between-mongodb-and-sql?)
| 11. | [what is ACID property in database?](#what-is-ACID-property-in-database?)
| 12. | [Searching any data in mongodb with same document and mysql with same rows,which one will be fast and why?](#Searching-any-data-in-mongodb-with-same-document-and-mysql-with-same-rows,which-one-will-be-fast-and-why?)
| 13. | [why did you use use the mongoDb in all the projects?](#why-did-you-use-the-mongoDb-in-all-the-projects?)
| 14. | [How did you intract with mongodb?](#How-did-you-intract-with-mongodb?)
| 15. | [How we connect one document into the another document .what is reference in mongoose?](#How-we-connect-one-document-into-the-another-document.what-is-reference-in-mongoose?)
| 16. | [How to fetch data from database?](#How-to-fetch-data-from-database?)
| 17. | [MongoDB commands to insert data in the database?](#MongoDB-commands-to-insert-data-in-the-database?)
| 18. | [How can be fasten the response of mongodb without use of Redis?](#How-can-be-fasten-the-response-of-mongodb-without-use-of-Redis?)
| 19. | [How to update the field in a document  of mongo db if the field is not available currently in our database ?](#How-to-update-the-field-in-a-document-of-mongodb-if-the-field-is-not-available-currently-in-our-database?)
| 20. | [How do you connect to mongodb? What is the syntax?](#How-do-you-connect-to-mongodb?-What-is-the-syntax?)
| 21. | [What are the different schema types in a mongoose schema?](#What-are-the-different-schema-types-in-a-mongoose-schema?)
| 22. | [What are some validations used in the schema?](#What-are-some-validations-used-in-the-schema?)

1.  ### What is mongo db?

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.

**[⬆ Back to Top](#MongoDB)**

2.  ### What is mongoose (Explian)?

**[⬆ Back to Top](#MongoDB)**

3.   ### Why we use mongoose

**[⬆ Back to Top](#MongoDB)**

 4.  ### Did know about schema validation

**[⬆ Back to Top](#MongoDB)**


5.  ### Which execute first schema validation or mongodb query

**[⬆ Back to Top](#MongoDB)**


### what is indexing in mongoDB?(Is there indexing in mongodb)?

**[⬆ Back to Top](#MongoDB)**

 ### How do you connect to mongodb? What is the syntax?

**[⬆ Back to Top](#MongoDB)**


### Why do we use mongoose if we have mongodb?

**[⬆ Back to Top](#MongoDB)**


###  What is aggregation in mongodb?(aggregation pipeline in mongodb)

**[⬆ Back to Top](#MongoDB)**


### what is difference between mongodb and sql?

**[⬆ Back to Top](#MongoDB)**

###  what is ACID property in database?

**[⬆ Back to Top](#MongoDB)**

###  searching any data in mongodb with same document and mysql with same rows,which one will be fast and why?

**[⬆ Back to Top](#MongoDB)**

### why did you use use the mongoDb in all the projects ?

**[⬆ Back to Top](#MongoDB)**

### How did you intract with mongodb

**[⬆ Back to Top](#MongoDB)**

### How we connect one document into the another document .what is reference in mongoose

**[⬆ Back to Top](#MongoDB)**

### How to fetch data from database 

**[⬆ Back to Top](#MongoDB)**


### MongoDB commands to insert data in the database

**[⬆ Back to Top](#MongoDB)**

### How can be fasten the response of mongodb without use of Redis?

**[⬆ Back to Top](#MongoDB)**

### How to update the field in a document  of mongo db if the field is not available currently in our database ?

**[⬆ Back to Top](#MongoDB)**

### How do you connect to mongodb? What is the syntax?

**[⬆ Back to Top](#MongoDB)**

### What are the different schema types in a mongoose schema?

**[⬆ Back to Top](#MongoDB)**

### What are some validations used in the schema?

 **[⬆ Back to Top](#MongoDB)**


*
 A SchemaType is then a configuration object for an individual property. A SchemaType says what type a given path should have, whether it has any getters/setters, and what values are valid for that path. SchemaType is different from a type. In other words, mongoose.ObjectId !== mongoose.Types.ObjectId. A SchemaType is just a configuration object for Mongoose
following are the valid schema types in mongoose schema
String
Number
buffer
Boolean
Date
ObjectId
Array
Map
Schema

We know that mongoDB is schemaless. and it is easy and fast to develop the application with mongodb schemaless behaviour.  But once the application moves to the production  and becomes stable and mature,there is no need to change schema frequently and it is not advisable too.at this time it is very important to enforce some schema validation in your database to avoid same unwanted data being inserted which can break your application.

there are some following validation
1) The fields: username, email, and password should be present in each document (they are mandatory)
2)The fields: username, email, and password should be of type string, and their strings’ length should be between the minimum and maximum limits.
3)The field email should comply with a specific regex pattern.
4)The field: registrationdate should be of type date.
5)The fields: confirmed and canceled should be of type bool

A SchemaType is different from a type. In other words, mongoose.ObjectId !== mongoose.Types.ObjectId. A SchemaType is just a configuration object for Mongoose. An instance of the mongoose.ObjectId SchemaType doesn't actually create MongoDB ObjectIds, it is just a configuration for a path in a schema.
The following are all the valid SchemaTypes in Mongoose.
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal
Map

MongoDB provides the capability to perform schema validation during updates and insertions. To specify validation rules when creating a new collection, use db.createCollection() with the validator option.
Very common questions that commonly ask in interview...





==>   JavaScript


1. What is JavaScript? What is the mean of scripting language?

2. How many datatypes javascript supports?

3. What is hosting in javascript?

4. What is Closure?

5. What is the difference between typeOf and instanceOf?

6. Difference between call, bind and apply?

7. What is difference between destructuring and rest operator?

8. What is Shallow copy and Deep copy?

9. What is Event loop in Javascript?

10. How Javascript works ?

11. What is Dom in javascript ?

12. Calback, stack, synchronous and asynchronous function in javascript?

13. Write a code for the asynchronous behaviour of javascript and explain it properly? 


14. How does JavaScript execute Asynchronous code?

15. What is closure in javascript?

16. Logical Operators. The Logical operators are those that are true or false. They return a true or false value to combine one or more true or false values.
Comparison operators compare two values and give back a boolean value: either true or false. Comparison operators are used in decision-making and loops.
1)
Operator	Description	                                                                                     Example
==	 Equal to: true if the operands are equal  	                                             5==5; //true
!=	Not equal to: true if the operands are not equal	                                      5!=5; //false
===	Strict equal to: true if the operands are equal and of the same type	5==='5'; //false
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	5!=='5'; //true
>	Greater than: true if the left operand is greater than the right operand	   3>2; //true
>=	Greater than or equal to: true if the left operand is greater than or equal to the right operand	                                                                                                                     3>=3; //true

2)
Logical operators perform logical operations: AND, OR and NOT.
Operator	     Description	                                                                                     Example
&&	Logical AND: true if both the operands/boolean values are true, else evaluates to false	 
                                                                                                                        true && false; // false
||	Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false	                                                                                          true || false; // true
!	Logical NOT

≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈



Difference let var const
Eventloop
Jwt
Promise
Promise syntax 
Star Pyramid question (solve)
Convert into 1d array (solve)

Reverse given word?
```js
 var reverseWords = function(s) {
    let Arr=s.split(' ');
    let start=0,end=Arr.length-1;
    while(start<end){
        [Arr[start],Arr[end]]=[Arr[end],Arr[start]];
        start++,end--;
    }
    return Arr.join(' ');
};

```
Write blog schema 
Gave a question and asked for the output.
BSF
Difference Arrow and normal function
Data structures
Callback,
Stack and queue
Difference between sql and nosql
 Sort the array (solve)
 
Environment variable
Middleware and its type
Linked List 
Linked list vs array and which is better
What is linked list
What is stack 
What is sorting
What is algo of quick sort
And its time complexity
What is indexing 
Diffrence bw promise call back and async await
What is this keyword
Diffrence bw http and https 
What is client server 
What is binary tree and time complexity of finding a value in binary tree
What is closure
Customer and order model 


How data transfer bw browser and server in https
What are == and === operator
[8:56 pm, 27/08/2022] +91 99962 62236: 👉Self Introduction
👉Project Explain (any)
👉How u implement Authentication in you project
👉Challanges u have faced while working on project
👉Linear search with code and time complexity
👉Binary search with code and What is time complexity
👉Explain Merge short and What is time complexity
👉Diff btw BFS &DFS
👉Event loop
👉DOM
👉Spread operator How it is different from other
👉Diff btw Sql nd Nosql database
👉Deepcopy & shallow copy
👉Diff btw Pass by refrence and Pass by value 
👉
👉What is Promise
👉why promise are preffered over callback
👉What is bodyparse

Tell me about yourself
Why you want to change your domain
Missing number code
Implement callback with using promises
Backbox testing
Waterfall model
Advantages of waterfall  model over spiral model
What is curring


What is error handelling? 
How can you do in your project?
Scenario: If i am client and accessing your website and passes wrong credential  then you can i get it

Write a mondoDb query to find the user which age is greater the 17 and which is from delhi.
Dsa- find all possible subarray from the array and after that check when the sum of any subArray is zero then print true otherwise print false
What is closure and write a code for it.....

RealLife use case of stack
RealLife use case of queue
RealLife use case of graph (other than map)
What are == and === operator
Diff between var, let and const
What is authentication & authorization

Difference between post, put, get, and delete api.
What is the time complexity of finding element in linked list explain
What is sorting?
Explain quicksort? What is its time complexity ? Explain its time complexity
Explain mergesort? What is its time complexity? Explain its time complexity
Explain binary search tree? What is the time complexity of finding element in bst? Explain its time complexity 
Difference between promise, callback, and async await
What is this keyword
Diffrence bw http and https 
What is closure
explain middleware? name 5 types of middleware
How do you access environment variables? 
How to add or update environment variables?

Explain complete event cycle
Explain client server architecture?

[8:56 pm, 27/08/2022] +91 99962 62236: Introduction
About project
Explain the blogging site project and any special library you used
About JWT
What is authentication?
What is the need for authentication?
How do you implement authentication?
What is API?


How does asyn/await work?
What are the promises?
Deepcopy & shallow copy
What is meant by object reference?

How to achieve asynchronous nature and explain

Gave a problem and want the output
Gave a problem and want the output
convert 2d array to 1d array - code

Kuch aur vi tha...
[8:56 pm, 27/08/2022] +91 99962 62236: What is query Param and path params?
The path parameter defines the resource location, while the query parameter defines sort, pagination, or filter operations
[8:56 pm, 27/08/2022] +91 99962 62236: What is cookies in API?
Image result for what are cookies in postman
A cookie is a piece of data that a server sends in the HTTP response. The client (optionally) stores the cookie and returns it on subsequent requests. This allows the client and server to share state. To set a cookie, the server includes a Set-Cookie header in the response.
[8:56 pm, 27/08/2022] +91 99962 62236: Infino question -Find all combination of given string
 Find intersection of two arrays
Nakad interview question-  reverse words in sentence , swap two nodes in cyclic linked list, queue using stack and a puzzle
[8:56 pm, 27/08/2022] +91 99962 62236: 1.Given a string find if it is palindrome or not
2. Find the nth largest element in an array
3. Print all the possible combinations having same length of a given string
4. Find intersection of two arrays
[8:56 pm, 27/08/2022] +91 99962 62236: Async.parallel
Async.Series
[8:56 pm, 27/08/2022] +91 99962 62236: Promise.all 
Promise.all settled
How to run crome in debugger mode
 How routing is working in express js
[8:56 pm, 27/08/2022] +91 99962 62236: 
Tell about JWT token it's lifetime
How to switch from master branch to developer branch
Model view control
Micro service architect
Application life cycle management


what is primary key,foreign key ?
types of joins

what is difference between array and linkedlist? expain the pros and cons of both.

. Introduced yourself. Tell me about your past experience?
2. Where do you use HTML, CSS?
3. If we want to make a border then which property do you use?
4.which type of input do you take from your frontend if it is a form?
5.what is your favorite project?
6.Tell me about books management project? 
7.what kind of data and the what you store in your database?
8.Suppose you have a book price 100 and want to update it to 80 then how and which query do you use?
9.why you find the book if the book is already isdeleted false?
10.can you use multiple collections in database?
11.If you want to collect data from two collection at a time is it possible? If possible then how & which query you use?
12.what is jwt?
13.what are the part of jwt?
14.why you use jwt and how to decorde it?
15.How you authenticate the user?
16.what is cookies?
17.if somehow i get your token can i able to use in different browser or not?
18.what is AWS s3?
19.How to connect with AWS? 
20.why you use AWS?
21.what kind of data you required from any user to store in your db by using AWS s3? 
22.what is Redis? 
23.How to connect redis with your project? 
24.why you use Redis? 
25.what is caching explain? 
26.what kind of memory it is? 
27.After adding data to cache memory you remove data from db then is it present in your cache memory or not?

28.Any question for me?

Following are some common technical and HR TCS NINJA Interview Questions  Asked In TCS NINJA 2022 Batch :-

Self Introduction
Explain about project
What do you know about C ?
What and Why #include ?
What is runtime & compile time ?
Why TCS ?
About TCS
Tell me about your leadership skills ?
Your Achievements in leadership
How do you manage work pressure ?
Difference between Interface & Abstract classes ?
Functions of Overloading and Overriding ?
What is infinite loop ?
Explain While, Do While and For Loop ?
What do you know about cloud computing & Its types ?
Major cloud computing platforms ?
What is Linux ?
Basic Linux Commands ?
What is array ?
What is pointer ?
Explain Functions ?
What do you know about C++ ?
What do you know about Python, HTML, and CSS ?

Next company
1) Tell me about yourself?
2) Why are you applying for this job? (or) Why does this role attract you?
3) Would you like to work overtime or odd hours?
4) What is more important to you: the money or the work?
5) What do you know about this organization?
7) Why should we hire you?
8) What are your salary expectations?
9) Assume you are hired, then how long would you expect to work for us?
10) How would you rate yourself on a scale of 1 to 10?
11) What are your achievements in life?
12) What is your objective in life?
13) What are your strengths?
14) What are your weaknesses?
15) What are your hobbies?
16) Explain, how would you be an asset to this organization?
17) Would you lie for the company?
18) Are you applying for other jobs also?
19) How do you get to know about our company?
20) What does success mean to you?
21) Describe yourself in one word?
22) What is the difference between confidence and overconfidence?
23) What is the difference between smart work and hard work?
24) Just imagine that you have enough money to retire right now. Would you?
25) Don't you think that you are overqualified for this position?
26) Do you have any blind spot?
27) How do you handle stress and pressure?
28) What is the disappointment in your life?
29) What makes you angry?
30) What was the most difficult decision you have made in your past life?
31) How did you know about this position/ vacancy?
32) What gets you up in the morning?
33) What is your favorite book?
34) As you said, internet surfing is your hobby. Which site do you surf mostly?
35) What was the biggest mistake of your life?
36) Do you have any reference?
37) How do you deal with an angry team member?
38) How do you deal with an angry or irritated customer?
39) What is your greatest fear?
40) Explain the difference between group and team?
41) What will you do if you don't get this position?
42) What is success for you?
43) Would you like to relocate or travel for the company?
44) What makes you happy?
45) Is there anything which makes you different from other candidates?
46) Describe the three things that are most important for you in a job?
47) What are your expectations from the company?
48) On a scale of one to ten, rate me as an interviewer?
49) Who is your role model? What have you incorporated into your life from him/her?
50) Do you have any questions for me?

Nakad interview question-  reverse words in sentence , swap two nodes in cyclic linked list, queue using stack and a puzzle

Next company
1. Tell about any one of your project
2. How authentication was implemented
3. Difference between authentication and authorisation
4. What is bodyparser
5. What is DOM
6. What is pass by value and pass by reference
7. What is spread operator
8. 
9. Difference between == and ===
10. When we have to use Sql database over Non-Sql 
11. 
13. Merge Sort code
14. Reverse a SinglyLinkedList
15. Time complexity of merge sort
16. What is DFS(Inorder, Postorder,PreOrder) and BFS explain
17. Which is better Linear Search or Binary Search
18. When we'll use Post, Put and Patch api.
19. Difference between setInterval and setTimeout

Next company
Difference let var const
Eventloop
Jwt
Promise
Promise syntax 
Star Pyramid question (solve)
Convert into 1d array (solve)
Write blog schema 
Gave a question and asked for the output.
BSF
Difference Arrow and normal function
Data structures
Callback,
Stack and queue
Difference between sql and nosql
 Sort the array (solve)
Environment variable
Middleware and its type
Linked List 
Linked list vs array and which is better

Next company

What is hoisting ?
What is closure ?
What is callback ?
Why we preferred promises over callback ?
What is middleware ? Explain its types .
Give one example of application level middleware .
Sorting an array
Star pattern
Flatten array

Next company
What is jwt?explain part of it.benifits of it

What is AWS and aws3
 What is jwt?explain part of it.benifits of it

What is AWS and aws3

Next company
live coding questions



// write a programme to reverse of an array.
// programme for second heighest in an array.

// array left rotation after given elements//

// sub sequence

Next company
Mobillion lab questions 
1. Even Driven
2. Which programming language use even driven
3. Middleware 
4. What is redis and how to insert( the command we use )data and why we need redis 
5. How redis save data 
6. Aggregation 
7. What is Middleware  
10. Callback with an example
Next company
what is primary key,foreign key ?
types of joins

what is difference between array and linkedlist? expain the pros and cons of both.

Next company
1. Introduced yourself. Tell me about your past experience?
2. Where do you use HTML, CSS?
3. If we want to make a border then which property do you use?
4.which type of input do you take from your frontend if it is a form?
5.what is your favorite project?
6.Tell me about books management project? 
7.what kind of data and the what you store in your database?
8.Suppose you have a book price 100 and want to update it to 80 then how and which query do you use?
9.why you find the book if the book is already isdeleted false?
10.can you use multiple collections in database?
11.If you want to collect data from two collection at a time is it possible? If possible then how & which query you use?
12.what is jwt?
13.what are the part of jwt?
14.why you use jwt and how to decorde it?
15.How you authenticate the user?
16.what is cookies?
17.if somehow i get your token can i able to use in different browser or not?
18.what is AWS s3?
19.How to connect with AWS? 
20.why you use AWS?
21.what kind of data you required from any user to store in your db by using AWS s3? 
22.what is Redis? 
23.How to connect redis with your project? 
24.why you use Redis? 
25.what is caching explain? 
26.what kind of memory it is? 
27.After adding data to cache memory you remove data from db then is it present in your cache memory or not?

28.Any question for me?

Drona HQ

Ques 1. If we store JWT token in someone else Computer and we want to make that user logout what will be do ?
Ques 2. 
Ques 3. What is JWT ?
Ques 4. Puzzle of 9 balls out of which 8 have same weight and one has different weight then rest...how many steps it will take to find that ball ?
Ques 5. Why are we using Redis in project i e URL shortner ?
Ques 6. Difference among Let var and const.
Ques 7. Functional and class components.
Ques 8. 
Ques 9. If I want that browser will not ask me to login again what should I do ?
Ques 10. If I delete history of browser and cookies...will it be possible that browser will not ask again me to login again?
Next company
1.Given a string find if it is palindrome or not
2. Find the nth largest element in an array
3. Print all the possible combinations having same length of a given string
4. Find intersection of two arrays

Next company
Assignment:
The task they need to complete is as follows. Make a web app, Preferably in Flutter or optionally in React, that is a 2-player game of rock-paper-scissor. both players will have the same app installed on their phones independently. once both players join game begins. both players are given time to choose rock-paper-scissor on their respective phones. after a countdown timer of 10 sec finishes the player's choices are revealed to each other. The Winner is declared and an option to start a new game is shown. The player's choices should be saved in a dynamo db after each game and the dynamo db table should get stored in an S3 bucket when players don't select to play a new game.

Chace last round

About company
What do you think we do
Any problem you have solved till now 
Data structures you know
What is the difference between Array list and array
And then linked list and array
Situation based questions
Then my  education background

Why you want to come in teck
Are you interested or not
Then CTC 
Then negotiation

Joining time 


Mistakes you can solve::
Plz read about the company 
, Don't say things about company that you don't know
(Coz  unhone mujhse cross question puch liya tha ki apko company k work culture k baare mai kisse pata chala(sir ki script follow deep kr li thi ))

Next company
1.what is promise?
2.what is closure?
3.what is eventloop?
4.Explain “this” keyword?
5.difference between == and ===
6.what is a callback?
7.difference between function and arrow function.
8. what is Async Await? 
9.what is HTTP request methods. GET,POST, PUT, DELETE. 
10.difference between http and https
11. Authentication vs Authorization?
12.Difference between SQL and NOSQL. 
13.
14.explain different types of sorting.
15.what is binary search?
16.what is LinkedList?
17.time complexity of searching
Next company
What is Dom 
Explain Authentication
How we give reference of author in blog
What is transaction
What is Spread and rest operator
What is promise
What is event loop
Pass by value and pass by reference
Stack with its real time example 
Difference between sql and nosql
What are the web Apis functions 
What is doubly link list and give real time example 
Merge sort with its time complexity 
Dsa question - Reverse a LinkedList (leetcode)

Next company
[7:40 pm, 09/08/2022] +91 70864 56347: Let vs const
Some written code questions
Json memory allocation
Middleware, Types of middleware

What are environment variables ?
Implement a LinkedList
What is node in LL
How one node is pointing to another node
Implement Binary Search
[7:43 pm, 09/08/2022] +91 70173 74338: 
RealLife use case of stack
RealLife use case of queue
RealLife use case of graph (other than map)
What are == and === operator
Diff between var, let and const
What is authentication & authorization

Difference between post, put, get, and delete api.
What is the time complexity of finding element in linked list explain
What is sorting?
Explain quicksort? What is its time complexity ? Explain its time complexity
Explain mergesort? What is its time complexity? Explain its time complexity
Explain binary search tree? What is the time complexity of finding element in bst? Explain its time complexity 
Difference between promise, callback, and async await
What is this keyword
Diffrence bw http and https 
What is closure
explain middleware? name 5 types of middleware
How do you access environment variables? 
How to add or update environment variables?

Explain complete event cycle
Explain client server architecture?


Next company
What is linked list
What is stack 
What is sorting
What is algo of quick sort
And its time complexity
What is indexing 
Diffrence bw promise call back and async await
What is this keyword
Diffrence bw http and https 
What is client server 
What is binary tree and time complexity of finding a value in binary tree
What is closure
Customer and order model 


How data transfer bw browser and server in https
What are == and === operator

Next company

Questions related to project
Explain project
Types of inheritance
Polymorphism
Session storage, local storage  , cookies
Synchronous and asynchronous operations,how you handled asynchronous operations in your project,
Selection sort and bubble sort difference,
Middleware ,Router middleWare,
1.what is currying in JS
2.Promises are faster than callback how.
3.why we use promise even it also take callback as an argument.
4. There is two table A and B you have to enter data in A and increase count in  B in single command line

Parnets Digital 1st round Interview Questions...

1. Introduction

4. Express 
5. What is emitter.
Ans :- Emitter that emits event from event que and give it to the event loop.
Its follow a pattern where we can create fire  and listen for your own events 

Like expl   when we click on a button  it send a signal to a perticular code to execute .
Emitter is like a button
Code=== >    Emmiter.on('get/api',(res,req)=>{ 
res.end(hello world)}
6. Call of function
7. What is your salary expectation.
Introduction
Create express server
What is moddleware and use
How to store images from server
What is file system
How to send images to server
What is CORS
What is aggregation and uses

1.What is authentication why we use it?
2.how you implimented authentication full process explaine?
3.Explain url shortner (why you impliment radis)?
4.Why we use Model view controller?


Next company

Next company
Next company


