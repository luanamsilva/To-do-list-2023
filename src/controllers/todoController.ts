import { Request, Response } from "express";
import {Todo} from '../models/Todo'

export const findToDo = async(req: Request, res: Response)=> {
const allToDo = await Todo.findAll()

res.json({ allToDo })
}


export const createTodo = async(req: Request, res: Response) =>{
  let {title } = req.body;
 
if(req.body.title){
   let newToDo = await Todo.create({
    title, 
    done: req.body.done ? true: false})
res.status(201);
  res.json({ newToDo });
} else{
  res.json({error: 'Verifique os dados informados'})
}
 
}




export const updateToDo = async(req: Request, res: Response) =>{

  let id  = req.params.id;
  
 let newToDo = await Todo.findByPk(id)
 if(newToDo){
  if(req.body.title){
    newToDo.title = req.body.title
  }
  if(req.body.done){
    switch(req.body.done.toLowerCase()){
      case 'true':
      case '1':
        newToDo.done = true;
        break;
      case 'false':
      case '0':
        newToDo.done = false;
        break
       
    }
  }
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