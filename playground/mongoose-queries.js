const { ObjectId } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// var id = '5979a7590e298006b45fd9841'
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By Id', todo)
// }).catch(e => console.log(e))

var id = '597992932f2d1314ccc859b9';
User.findById(id).then(user => {
  if (!user) {
    return console.log('User not found')
  }

  console.log(JSON.stringify(user, undefined, 2))
}).catch(err => console.log(err))
