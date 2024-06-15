import Task from '../controllers/produto.controller.js'
//import { validationResult } from 'express.validator'

export default class TaskController {
    static async indexe(req, res) {
        const tasks = await Task.findMany()
        res.json(tasks)
    }

    static async create (req,res){
        const task = await Task.create({
            data: req.body
        })
        res.json(task)
    }
}

