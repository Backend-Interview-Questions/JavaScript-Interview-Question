
---

### ------------------------------------------- [MongoDB] ---------------------------------------------



---

### MongoDB

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [What is mongo db?](#What-is-mongo-db)                                                                                                                                              |
| 2.  |  [What is mongoose (Explain)?](#What-is-mongoose-Explain)                                                                                                                                                       |
| 3.  | [Why we use mongoose?](#why-we-use-mongoose)                                                                                                      |
| 4.  | [Did know about schema validation](#did-know-about-schema-validation)                                                                                         |
| 5.  | [Which execute first schema validation or mongodb query](#Which-execute-first-schema-validation-or-mongodb-query)
| 6.  |  [what is indexing in mongoDB?(Is there indexing in mongodb)?](#what-is-indexing-in-mongoDB_Is-there-indexing-in-mongodb)
| 7.  |  [How do you connect to mongodb? What is the syntax?](#How-do-you-connect-to-mongodb-What-is-the-syntax)
| 8.  |  [Why do we use mongoose, if we have mongodb?](#Why-do-we-use-mongoose-if-we-have-mongodb)
| 9.  | [What is aggregation in mongodb?What is aggregation pipeline in mongodb?](#What-is-aggregation-in-mongodb-aggregation-pipeline-in-mongodb)
| 10. | [what is difference between mongodb and sql?](#what-is-difference-between-mongodb-and-sql)
| 11. | [what is ACID property in database?](#what-is-ACID-property-in-database)
| 12. | [Searching any data in mongodb with same document and mysql with same rows? which one will be fast and why?](#Searching-any-data-in-mongodb-with-same-document-and-mysql-with-same-rows-which-one-will-be-fast-and-why)                            |
| 13. | [why did you use the mongoDb in all the projects?](#why-did-you-use-the-mongoDb-in-all-the-projects)                                                                                      |
| 14. | [How did you intract with mongodb?](#How-did-you-intract-with-mongodb)
| 15. | [How we connect one document into the another document .what is reference in mongoose?](#How-we-connect-one-document-into-the-another-document-what-is-reference-in-mongoose)
| 16. | [How to fetch data from database?](#How-to-fetch-data-from-database)
| 17. | [MongoDB commands to insert data in the database?](#MongoDB-commands-to-insert-data-in-the-database)
| 18. | [How can be fasten the response of mongodb without use of Redis?](#How-can-be-fasten-the-response-of-mongodb-without-use-of-Redis)
| 19. | [How to update the field in a document  of mongo db? if the field is not available currently in our database?](#How-to-update-the-field-in-a-document-of-mongodb-if-the-field-is-not-available-currently-in-our-database)                                       |
| 20. | [How do you connect to mongodb? What is the syntax?](#How-do-you-connect-to-mongodb-What-is-the-syntax)
| 21. | [What are the different schema types in a mongoose schema?](#What-are-the-different-schema-types-in-a-mongoose-schema)
| 22. | [What are some validations used in the schema?](#What-are-some-validations-used-in-the-schema)


Q. what is agreegation pipeline and what are its steps.and they also

---

1. ### What is mongo db?

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions. or
![mongodb](./Assets/MongoDB/MongoDB-chart1.jpg)
MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.or

MongoDB is a document-oriented NoSQL database written in C++ language ,used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables.

Key Features:

Document Oriented and NoSQL database.
Supports Aggregation
Uses BSON format
Sharding (Helps in Horizontal Scalability)
Supports Ad Hoc Queries
Schema Less
Capped Collection
Indexing (Any field in MongoDB can be indexed)
MongoDB Replica Set (Provides high availability)
Supports Multiple Storage Engines

**[⬆ Back to Top](#MongoDB)**

2. ### What is mongoose (Explain)?

Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.

**[⬆ Back to Top](#MongoDB)**

3. ### Why we use mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

**[⬆ Back to Top](#MongoDB)**

 4. ### Did know about schema validation

Yes, we can create validation rules for our fields, such as allowed data types and value ranges.
There are some following validation
1) The fields: username, email, and password should be present in each document (they are mandatory)
2)The fields: username, email, and password should be of type string, and their strings’ length should be between the minimum and maximum limits.
3)The field email should comply with a specific regex pattern.
4)The field: registrationdate should be of type date.
5)The fields: confirmed and canceled should be of type bool.

**[⬆ Back to Top](#MongoDB)**


5. ### Which execute first schema validation or mongodb query ?

Schema Validation

**[⬆ Back to Top](#MongoDB)**


6. ### what is indexing in mongoDB?(Is there indexing in mongodb)?

MongoDB uses indexing in order to make the query processing more efficient. If there is no indexing, then the MongoDB must scan every document in the collection and retrieve only those documents that match the query. Indexes are special data structures that stores some information related to the documents such that it becomes easy for MongoDB to find the right data file. The indexes are order by the value of the field specified in the index. 
**Creating an Index : **
MongoDB provides a method called createIndex() that allows user to create an index. 

Syntax – 
 
```js
db.COLLECTION_NAME.createIndex({KEY:1}) 

```
The key determines the field on the basis of which you want to create an index and 1 (or -1) determines the order in which these indexes will be arranged(ascending or descending).

**[⬆ Back to Top](#MongoDB)**

7. ### How do you connect to mongodb? What is the syntax?

Make sure that MongoDB installs on your pc.

To connect a Node.js application to MongoDB, we have to use a library called Mongoose.  
```js
const mongoose = require("mongoose");

//After that, we have to call the connect method of Mongoose

mongoose.connect("mongodb+srv://PKS:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/ProductsManagement-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


```
**[⬆ Back to Top](#MongoDB)**


8.  ### Why do we use mongoose if we have mongodb?
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

![mongooseRObject Mapping between Node and MongoDB managed via Mongoose](./Assets/MongoDB/mongooseR.jpg)

MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

**[⬆ Back to Top](#MongoDB)**


9. ###  What is aggregation in mongodb?(aggregation pipeline in mongodb)

**Aggregation Pipelines**
An aggregation pipeline consists of one or more stages that process documents:

*Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

*The documents that are output from a stage are passed to the next stage.

*An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.

**Note**Aggregation pipelines run with the
 ```js
db.collection.aggregate()

 //method do not modify documents in a collection, unless the pipeline contains a 
$merge
 //or 
$out
```
 stage.

**[⬆ Back to Top](#MongoDB)**


10. ### what is difference between mongodb and sql?

![diffrence](./Assets/MongoDB/sqlVsMongo.png)

SQL databases are used to store structured data while NoSQL databases like MongoDB are used to save unstructured data. MongoDB is used to save unstructured data in JSON format. MongoDB does not support advanced analytics and joins like SQL databases support.

NoSQL is a non-relational DBMS, that does not require a fixed schema, avoids joins, and is easy to scale. The purpose of using a NoSQL database is for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps

**[⬆ Back to Top](#MongoDB)**

11. ###  what is ACID property in database?

**The ACID properties, in totality, provide a mechanism to ensure the correctness and consistency of a database in a way such that each transaction is a group of operations that acts as a single unit, produces consistent results, acts in isolation from other operations, and updates that it makes are durably stored**

**Atomicity:**
By this, we mean that either the entire transaction takes place at once or doesn’t happen at all. There is no midway i.e. transactions do not occur partially. Each transaction is considered as one unit and either runs to completion or is not executed at all.

**Consistency:**
This means that integrity constraints must be maintained so that the database is consistent before and after the transaction. It refers to the correctness of a database. Referring to the example above, 
The total amount before and after the transaction must be maintained. 
Total before T occurs = 500 + 200 = 700. 
Total after T occurs = 400 + 300 = 700. 
Therefore, the database is consistent. Inconsistency occurs in case T1 completes but T2 fails. As a result, T is incomplete. 
**Isolation:**
This property ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state. Transactions occur independently without interference. Changes occurring in a particular transaction will not be visible to any other transaction until that particular change in that transaction is written to memory or has been committed. This property ensures that the execution of transactions concurrently will result in a state that is equivalent to a state achieved these were executed serially in some order. 

**Durability:** 
This property ensures that once the transaction has completed execution, the updates and modifications to the database are stored in and written to disk and they persist even if a system failure occurs. These updates now become permanent and are stored in non-volatile memory. The effects of the transaction, thus, are never lost. 

**[⬆ Back to Top](#MongoDB)**

12. ###  Searching any data in mongodb with same document and mysql with same rows? which one will be fast and why?

We know MongoDB stores data as BSON and SQL server stores them as 8Kb pages. So does storing the data in form of BSON files makes it faster compared to SQL Server.

**[⬆ Back to Top](#MongoDB)**

13. ### why did you use the mongoDb in all the projects ?

MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.

The key/value pairs can be structured differently from one document to another in MongoDB. MongoDB offers greater security, reliability, and efficiency in addition to the flexibility of modifying the data structure or schema. As a result, it facilitates higher speed and storage requirements.

**[⬆ Back to Top](#MongoDB)**

14. ### How did you intract with mongodb

*Install the MongoDB Node.js Driver
```js
npm i mongoDB
```
*Create a free MongoDB Atlas cluster 

*Get your cluster’s connection info

*Make sure that MongoDB installed on your pc.

To connect a Node.js application to MongoDB, we have to use a library called Mongoose.  
```js
const mongoose = require("mongoose");
//After that, we have to call the connect method of Mongoose
mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
```
Then we have to define a schema. A schema is a structure, that gives information about how the data is being stored in a collection.
**Example:** Suppose we want to store information from a contact form of a website.
```js
const contactSchema = {
   email: String,
   query: String,
}; 
```
Then we have to create a model using that schema which is then used to store data in a document as objects.
```js
const Contact = mongoose.model("Contact", contactSchema);
Then, finally, we are able to store data in our document.
app.post("/contact", function (req, res) {
   const contact = new Contact({
       email: req.body.email,
       query: req.body.query,
   });
   contact.save(function (err) {
       if (err) {
           res.redirect("/error");
       } else {
           res.redirect("/thank-you");
       }
   });
});
```
Now let’s understand the working with the help of a code example.

**[⬆ Back to Top](#MongoDB)**

15. ### How we connect one document into the another document .what is reference in mongoose

MongoDB has the join-like $lookup aggregation operator in versions >= 3.2. Mongoose has a more powerful alternative called populate(), which lets you reference documents in other collections.

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);
```
So far we've created two Models. Our Person model has its stories field set to an array of ObjectIds. The ref option is what tells Mongoose which model to use during population, in our case the Story model. All _ids we store here must be document _ids from the Story model.

**Note:** ObjectId, Number, String, and Buffer are valid for use as refs. However, you should use ObjectId unless you are an advanced user and have a good reason for doing so.

**Population**
So far we haven't done anything much different. We've merely created a Person and a Story. Now let's take a look at populating our story's author using the query builder:
```js
Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });
```

Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.

Arrays of refs work the same way. Just call the populate method on the query and an array of documents will be returned in place of the original _ids

**[⬆ Back to Top](#MongoDB)**

16. ### How to fetch data from database ?

*Step 1 – Create Node Express js App
*Step 2 – Install express , body-parser mongoose dependencies
*Step 3 – Connect App to MongoDB
*Step 4 – Create Model
*Step 5 – Create Routes
*Step 6 – Import Modules in App.js
*Step 7 – Start App Server

**[⬆ Back to Top](#MongoDB)**


17. ### MongoDB commands to insert data in the database

*Insert a Single Document
####db.collection.insertOne()#### inserts a single document into a collection.
```js
db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)
```
*Insert Multiple Documents
 ####db.collection.insertMany()#### can insert multiple documents into a collection. Pass an array of documents to the method.

 ```js
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])
```

**[⬆ Back to Top](#MongoDB)**

18. ### How can be fasten the response of mongodb without use of Redis?

*Create custom Indexes for your queries
*Minimise DB requests (avoid .populate() if possible)
*Use .select() to select specific properties to return
```js
 Model.find({type: "Animal"}).select({name: 1})
```

**[⬆ Back to Top](#MongoDB)**

19. ### How to update the field in a document  of mongodb? if the field is not available currently in our database?

We can add a query to your update statement:
```js
db.foo.update({'title.de': {$exists : false}}, {$set: {'title.de': ''}})
```
**Update**
For your modified question my solution looks like this - would that work for you? (If not, why?)
```js
db.foo.update({site_id: 'xxx', 'title.de': {$exists : false}}, {$set: {'title.de': ''}, {multi: true})
db.foo.update({site_id: 'xxx', 'content.de': {$exists : false}}, {$set: {'content.de': ''}}, {multi: true})

// we can also use--
db.collection.updateOne()

db.collection.updateMany()

db.collection.findAndModify()
```

**[⬆ Back to Top](#MongoDB)**

20. ### How do you connect to mongodb? What is the syntax?

*Install the MongoDB Node.js Driver
```js
npm i mongoDB
```
*Create a free MongoDB Atlas cluster 

*Get your cluster’s connection info

*Make sure that MongoDB installed on your pc.

To connect a Node.js application to MongoDB, we have to use a library called Mongoose.  
```js
const mongoose = require("mongoose");
//After that, we have to call the connect method of Mongoose
mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
```
Then we have to define a schema. A schema is a structure, that gives information about how the data is being stored in a collection.
**Example:** Suppose we want to store information from a contact form of a website.
```js
const contactSchema = {
   email: String,
   query: String,
}; 
```
Then we have to create a model using that schema which is then used to store data in a document as objects.
```js
const Contact = mongoose.model("Contact", contactSchema);
Then, finally, we are able to store data in our document.
app.post("/contact", function (req, res) {
   const contact = new Contact({
       email: req.body.email,
       query: req.body.query,
   });
   contact.save(function (err) {
       if (err) {
           res.redirect("/error");
       } else {
           res.redirect("/thank-you");
       }
   });
});
```
Now let’s understand the working with the help of a code example.


**[⬆ Back to Top](#MongoDB)**

21. ### What are the different schema types in a mongoose schema?


A SchemaType is different from a type. In other words, mongoose.ObjectId !== mongoose.Types.ObjectId. A SchemaType is just a configuration object for Mongoose. An instance of the mongoose.ObjectId SchemaType doesn't actually create MongoDB ObjectIds, it is just a configuration for a path in a schema.
The following are all the valid SchemaTypes in Mongoose.

BSON types include all JSON types as well as additional types that you can reference by name:

double                                  string                                   object
array                                   objectId                                 date
null                                    regex                                    int
timestamp                               long                                     decimal
uuid                                    binData                                  mixed
bool

The following standard JSON types are available:

object                                   array                                   number
boolean                                  string                                  null

**[⬆ Back to Top](#MongoDB)**

22. ### What are some validations used in the schema?

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

MongoDB provides the capability to perform schema validation during updates and insertions. To specify validation rules when creating a new collection, use db.createCollection() with the validator option.
Very common questions that commonly ask in interview...

**[⬆ Back to Top](#MongoDB)**

