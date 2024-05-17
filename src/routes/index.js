import { Router } from 'express'
import produtoRoute from './produto.route.js'//está apelidando/renomeando o produtoRouter

const router = Router()

router.use('/produtos', produtoRoute)

export default router