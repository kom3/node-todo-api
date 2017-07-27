const express = require('express')
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then(doc => {
    res.send(doc)
  }, e => {
    res.status(400).send(e)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos})
  } , err => {
    res.status(400).send(err)
  })
})

// GET /todos/123454321
app.get('/todos/:id', (req, res) => {
  var id = req.params.id

  if(!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then(todo => {
    if(!todo) {
      return res.status(404).send()
    }

    res.send({ todo })    
  }, e => {
    res.status(404).send()
  })

})

app.listen(3000, () => {
  console.log('Starting on port 3000')
})

module.exports = { app }
