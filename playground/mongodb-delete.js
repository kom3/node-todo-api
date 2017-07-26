// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Users').deleteMany({name: 'Galih Akbar M'})

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59786eccc412820a6cbcbbe3')
  }).then(result => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
  //   console.log(result);
  // });

  // db.close();
});
