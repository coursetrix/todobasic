const router = require('express').Router();
let Todo = require('../models/Todo');

router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const todo_description = req.body.todo_description;
  const todo_responsible = req.body.todo_responsible;
  const todo_priority = req.body.todo_priority;
  const todo_completed = req.body.todo_completed;

  const newTodo = new Todo({
    todo_description,
    todo_responsible,
    todo_priority,
    todo_completed,
  });

  newTodo.save()
  .then(() => res.json('Todo added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Additional routes for updating and deleting can go here

module.exports = router;
