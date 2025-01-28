```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter: 1}})
//Alternatively, ensure the field is initialized as a number
db.collection.insertOne({"_id":ObjectId("someId"), counter: 0})
```