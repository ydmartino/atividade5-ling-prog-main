import { validationResult } from 'express-validator'
import Produto from '../models/produto.model.js'


//cria nova classe ProdutoController e nova função assincrona e estática chamada index, que traz do banco os itens listados
export default class ProdutoController{
  static async index(req, res) {
      const produtos = await Produto.findMany()
      res.json(produtos)
  }
  static async create(req, res){
      //array de erros
      const erros = validationResult(req)
      if (!erros.isEmpty()) {
          return res.status(400).json({ erros: erros.array() })
      }

      const produto = await Produto.create({
          data:req.body
      })
      res.json(produto)
  }

  //função para buscar um produto especifico
  static async show(req, res) {
      const erros = validationResult(req)
      if (!erros.isEmpty()) {
          return res.status(400).json({ erros: erros.array() })
      }
      const produto = await Produto.findUnique({
          where: {
              id: parseInt(req.params.id)//parseInt pode ser substituido por Numbers com a mesma sintaxe / req.params.id pode vir como string, precisa ser convertida para numero 
              }
      })
      if(!produto) {
          return res.status(404).json({ message: 'Produto não encontrado' })
      }
      res.json(produto)
  }
  
  //função update
  static async update(req, res) {
      const erros = validationResult(req)
      if (!erros.isEmpty()) {
          return res.status(400).json({ erros: erros.array() })
      }
      const produto = await Produto.findUnique({
        where: {
          id: parseInt(req.params.id)
        }          //verificar se o produto existe, criar uma função para retirar redundancias de código
      })
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }
      const updatedProduto = await Produto.update({
        where: {
          id: parseInt(req.params.id)
        },
        data: req.body
      })
      res.json(updatedProduto)
    }
  static async delete(req, res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Produto deletado com sucesso' })
  }
} 