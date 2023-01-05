import { Request, Response } from "express";
import {Todo} from '../models/Todo'

export const findToDo = async(req: Request, res: Response)=> {
const allToDo = await Todo.findAll()

res.json({ allToDo })
}

export const oneToDo = async (req: Request, res: Response) => {

  let {id} = req.params

  let getToDo = await Todo.findByPk(id)

if(getToDo) {
res.json({getToDo})
}
else{
  res.json({error: 'Tarefa não encontrada'});
  }
}


export const createTodo = async(req: Request, res: Response) =>{
  let {title } = req.body;
 

  let newToDo = await Todo.create({title})
res.status(201);
  res.json({ id: newToDo.id, title });
}




export const updateToDo = async(req: Request, res: Response) =>{

  let { id } = req.params
let { title} = req.body

 let newToDo = await Todo.findByPk(id)
 if(newToDo){

  newToDo.title = title
  await newToDo.save()
  res.json({newToDo})
 }
 else{
  res.json({error: "Tarefa não localizada"})
 }
    } 

export const deleteToDo = async (req: Request, res: Response) =>{
  let {id} = req.params

  await Todo.destroy(  {
    where: {
      id
    }
  })


}