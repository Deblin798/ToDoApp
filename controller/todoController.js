const Todo = require("../models/TodoSchema")

const postTodo = async(req, res) => {
    try {
        const success = await Todo.create({todo: req.params.todo})
        if(success){
            res.status(200).send({"message": "Todo Created!"})
        }else{
            res.status(200).send({"message": "Todo not Created!"})
        }
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async(req, res) => {
    try {
        const success = await Todo.findByIdAndUpdate(req.params.id, {todo: req.params.todo})
        if(success){
            res.status(200).send({"message": "Todo Updated!"})
        }else{
            res.status(200).send({"message": "Todo not Updated!"})
        }
    } catch (error) {
        console.log(error);
    }
}

const getTodo = async(req, res) => {
    try {
        const success = await Todo.find()
        if(success){
            res.status(200).send({"message": success})
        }else{
            res.status(200).send({"message": "Cannot get items"})
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async(req, res) => {
    try {
        const success = await Todo.findByIdAndDelete(req.params.id)
        if(success){
            res.status(200).send({"message": "Deleted"})
        }else{
            res.status(200).send({"message": "Item not deleted"})
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = {postTodo, updateTodo, getTodo, deleteTodo}