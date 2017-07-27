const { ObjectId } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then(result => {
//   console.log(result)
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5979ccf2edbb20c831beedd8').then(todo => {
  console.log(todo)
})
