import { body, param } from 'express-validator'

export const taskValidator = [
  body('nome').isString().withMessage("Nome é obrigatório"),
  body('preco').isFloat().withMessage("Preço é obrigatório"),
  body('descricao').isString().withMessage('Descrição é obrigatório')
]

export const taskUpdateValidator = [
  param('id').isInt().withMessage('ID é obrigatório'),
  body('nome').isString().withMessage("Nome é obrigatório"),
  body('preco').isFloat().withMessage("Preço é obrigatório"),
  body('descricao').isString().withMessage('Descrição é obrigatório')
]

export const taskIdValidator = [
  param('id').isInt().withMessage('ID é obrigatório')
]