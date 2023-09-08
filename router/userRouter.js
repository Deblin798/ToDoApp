const express = require('express')
const router = express.Router();
const { postTodo, updateTodo, getTodo, deleteTodo } = require('../controller/todoController');


router.post("/postTodo/:todo", postTodo)
router.put("/updateTodo/:id/:todo", updateTodo)
router.get("/getTodo", getTodo)
router.delete("/deleteTodo/:id", deleteTodo)

module.exports = router