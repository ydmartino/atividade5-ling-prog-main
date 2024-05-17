import { Router } from 'express'
import ProdutoController from '../controllers/produto.controller.js'
import { produtoUpdateValidator, produtoValidator, produtoIdValidator } from '../validators/produto.validator.js'

const router = Router()

//rota raiz '/'
router.get('/', ProdutoController.index)
router.post('/', produtoValidator, ProdutoController.create)
router.get('/:id', produtoIdValidator, ProdutoController.show)
router.put('/:id', produtoUpdateValidator, ProdutoController.update)
router.delete('/:id', produtoIdValidator, ProdutoController.delete)

export default router