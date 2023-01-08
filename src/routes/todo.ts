import { Router } from "express";
import * as TodoController from '../controllers/todoController'

const router = Router()

router.get('/todo', TodoController.findToDo)
router.post('/todo', TodoController.createTodo)
router.put('/todo/:id', TodoController.updateToDo)
router.delete('/todo/:id', TodoController.deleteToDo)

export default router;