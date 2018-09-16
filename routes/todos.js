let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Todo = mongoose.model('Todo');

router.post('/', (req, res) => {
    let newTodo = new Todo();
    newTodo.description = req.body.description;
    newTodo.status = req.body.status;
    newTodo.owner = req.body.owner;
    newTodo.save((err) => {
        if(err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

router.get('/:id', (req, res) => {
    Todo.find({owner: req.params.id}).then((orders) => {
        res.json(orders)
    })
})

router.put('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if(err) {
            res.send(err)
        } else {
            todo.description = req.body.newTodo;
            todo.save((err) => {
                if(err) {
                    res.send(err)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    Todo.deleteOne({_id: req.params.id}, (err) => {
        if(err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router;