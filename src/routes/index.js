import { Router } from 'express'
import produtoRoute from './produto.route.js'//está apelidando/renomeando o produtoRouter
import taskRoute from './task.route.js'

const router = Router()

router.use('/produtos', produtoRoute)
router.use('/tasks', taskRoute)

export default router