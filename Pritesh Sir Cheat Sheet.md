# JavaScript-Interview-Question
# [Javascript]


### Q.1. What is javascript? How does it work?
**Ans. JavaScript is the world's most popular programming language. Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.
     JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.**

### Q.2. What is an asynchronous operation? Is Javascript synchronous or asynchronous.
**Ans. Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e., every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
    Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one.
     JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time.**

### Q.3. Explain async using set timeout?
**Ans. setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires. JavaScript is single-threaded therefore it can only do one task at a time. It means that it can only carry a single task a given time. The setTimeout() sets a timer and executes a callback function after the timer expires.**

### Q.4. JS is a single threaded or multi-threaded?
**Ans. JavaScript is a single-threaded language because while running code on a single thread, it can be really easy to implement as we don’t have to deal with the complicated scenarios that arise in the multi-threaded environment. JavaScript is synchronous in nature.**

### Q.5 Is JS asynchronous or synchronous language?
**Ans. JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time. But it can be asynchronous in some specific tasks. The word asynchronous means not occurring at the same time. Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute asynchronously. We can classify most asynchronous JavaScript operations with two primary triggers: Browser API/Web API events or functions: These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more. Promises: A unique JavaScript object that allows us to perform asynchronous operations.**

### Q.6 Difference between var let and const?
<h3>Q.6. Difference between var, let and const?</h3>
    <h4>Ans. Difference between <a
            href="https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/"> var, let
            and const……. </a>
        <table>
            <tr>
                <th>Var</th>
                <th>Let</th>
                <th>Const</th>
            </tr>
            <tr>
                <td>1.The scope of a var variable is functional scope.</td>
                <td>1.The scope of a let variable is block scope</td>
                <td>1.The scope of a const variable is block scope.</td>
            </tr>
            <tr>
                <td>2. It can be updated and re-declared into the scope. <br>


                    <font style=" color: darkgreen  ;">&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; console.log(a); <br> <br><br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; var a = 10;
                    </font>
                    <br>

                    <br><br>

                    Output: undefined
                </td>

                <td>
                    2.It can be updated but cannot be re-declared into the scope. <br>
                    <font style="color: darkgreen;">
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; let a = 10
                        <br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; // It is not allowed
                        <br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; let a = 10 <br>

                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; // It is allowed
                        <br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; a = 10
                    </font> <br>
                    Output:

                    Uncaught SyntaxError: Identifier 'a' has already been declared

                </td>

                <td>
                    2. It cannot be updated or re-declared into the scope. <br>

                    <font style="color: darkgreen;">
                        &nbsp; &nbsp;&nbsp; const a = 10; <br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; function f() { <br>
                        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; a = 9 <br>
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;console.log(a) <br>
                        &nbsp; &nbsp;&nbsp;} <br>
                        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; f(); <br>
                        <br>
                    </font>
                    Output:
                    a=9 <br>
                    TypeError: Assignment to constant variable.

                </td>
            </tr>
            <tr>
                <td>3.It can be declared without initialization</td>
                <td>3.It can be declared without initialization</td>
                <td>3.It cannot be declared without initialization</td>
            </tr>
            <tr>
                <td>4.It can be accessed without initialization as its default value is “undefined”.</td>
                <td>4.It cannot be accessed without initialization otherwise it will give ‘reference Error’.</td>
                <td>4.It cannot be accessed without initialization, as it cannot be declared without initialization.
                </td>
            </tr>

            <tr>
                <td>5. hoisting done, with initializing as ‘default’ value</td>
                <td>5.Hoisting is done, but not initialized (this is the reason for error when we access the let
                    variable
                    before declaration/initialization</td>
                <td>5.Hoisting is done, but not initialized (this is the reason for error when we access the const
                    variable before declaration/initialization</td>
            </tr>
        </table>
    </h4>

### What is hoisting 
### What is a promise? What are the states of promises. What is promisify?
### What is async await?
### Difference between promise and async & await. Is async await notation preferred over promises? If so, why?
### What are JavaScript Objects ? how to create them. 
### How to search for a value or a key in an object? 
### What is a callback function? 
### What are the drawbacks of callback and what is callback hell.
###  What is the difference between callback and promise. How can you write the same async operation using promise and callback 
### Difference between function and arrow function
### Difference between i++ and ++i
### What is the “this” operator?
### What is the closure concept?
### what is closure - with code, why is it required, it's benefits 
### What is json? What do the functions json.parse and json.stringify do?
### What is the difference between '==' and '===' operators? 
### What is the typeof operator? What is NaN?
### What are settimeout and setinterval functions and what is the difference between them?
### What is functional scope and block scope? 
### What is shallowCopy and deepCopy
### What is the difference between map and filter. Explain math , the built-in javascript object, functionalities. 
### What is ES6? Explain some features of ES6
### Difference btw typescript & javascript.
### what is regex?
### what is first class functions
### diff between primitive and reference data types
### Difference between null and undefined
### difference between slice and splice 
### what is spread operater and rest operator
### how to convert intiger to string and string to integer
### Explain JS Object methods like- Object.Keys,  Object.values and Object.entries


###                                                      API
### What is an API? 
### What are Rest Api?
### What are rest Api ? why they are stateless?
### What are the different ways to pass data to an API while requesting a Create operation? Discuss the Content-Type header in brief
### Explain the GET, POST, PUT, POST and PATCH method types
### DIfference between PUt and Patch
### What is an HTTP status code? Discuss the popularly used codes along with their usecase.
### What are http status codes? Please elaborate?


###                                                        Nodejs
### What is Nodejs?
###  What is the difference between Javascript and Nodejs? 
### Node js is single threaded or multi threaded? Explain in detail what that means. 
### What is meant by request and response cycle in a nodejs application?
### What is express?
### What are the benefits of using this framework?
### What is Middleware? 
### What are global and route level middlewares?
### Explain about application and route based middleware?
### What is the function of an express router? What is a route and route splitting?
### How Nodejs is different from a multithreaded architecture?
### What is .env file or environment variables? Why are they important?
### What is an event loop? Explain with an example.
### security  -  how would you protect your node js server?



###                                                   MongodDb
### Why is a database? Name a few examples.
### Why you use MongoDB over MySQL and PostgreSQL?  MySql vs MongoDb ( or SQL/RDBMS vs NoSql). 
### Compare relational and non-Relational databases and their benefits or drawbacks? 
### What kind of db is MongoDb? Why do we define schema in nodejs application when working with Mongodb if it is schema-less?
### What is an aggregation pipeline? What are some stages used in it?
### What is a  Schema and a model in mongoose. How are they different?
### Discuss some common mongoose APIs for CRUD operations.
### Why do you have to use await if you want to process the result.
### What are indexes?  What is the default index value set by MongoDB?
### What do you mean by database indexing? 
### How to link the document of one collection to a document in another collection using mongoose. Explain reference in mongoose.
### What is the difference between find, findOne, findOneAndUpdate ,findById , updateOne, update and updateMany? When should you use each?


###                                                    AWS
### What is AWS and AWS S3 ? 
### What are the command to push in AWS S3?
### What is meant by a bucket?
### Can we upload image in database w/o using AWS S3. What are the benefits of using s3 instead?


###                                                    Caching
	
### What is meant by cache and caching?
### Why we use redis 
### Why do we need redis if we have databases?
### Redis advantages and disadvantages.
### Explain cache miss and cache hit.


###                                                       Auth
### What is authentication and authorization? What is the difference between them?
### What is jwt? Describe the parts of JWT? What are the benefits of using a JWT 
### Why authorization is necessary?
### How did you protected your Routes?

###                                                       Project
### How do you implement authentication in your project?
### Explain the flow how a user is authenticated and the prerequisite for the same (token generation and sharing with the client)
### How to generate a token ? How to verify it ?
### Explain URL shortener project (explain the overview, features and how using redis). What is shortid. What happens if the same long url is passed in the request twice. How can you create a unique short code without using shortid package? How is the redirection happening?
### Why do we use mvc (model view controller) in projects 
### Deploy your project on Heroku ?

###                                               Other (OOPS + Git + Multithreading)
###                                                       OOPS overview.
### What is inheritance and abstraction .
### What is Git? 
### What are some basic git commands?
### What is a Git repository and branches? 
### What is difference between Git and GitHub
### What is class,id in html? What is DOM?
