import { Router } from 'express'
import TaskController from '../controllers/task.controller.js'
import { taskUpdateValidator, taskValidator, taskIdValidator } from '../validators/task.validator.js'

const router = Router()

//rota raiz '/'
router.get('/', TaskController.index)
router.post('/', taskValidator, TaskController.create)
//router.get('/:id', taskIdValidator, TaskController.show)
//router.put('/:id', taskUpdateValidator, TaskController.update)
//router.delete('/:id', taskIdValidator, TaskController.delete)

export default router