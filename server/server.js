const express = require('express')
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
})

module.exports = { app }
