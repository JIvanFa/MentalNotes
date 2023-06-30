import { Router } from "express";
import { authRequired } from '../middleware/validateToken.js'
import {
    getTasks, getTask, createTask, updateTask,
    deleteTask
} from '../controllers/task.controller.js'
import { validateSchema } from '../middleware/validator.middleware.js'
import { createTaskChema } from "../schemas/task.schema.js";
const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)

router.post('/tasks', authRequired, validateSchema(createTaskChema), createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)
export default router;