import Task from "../models/task.model.js"

export const getTasks = async (req, res) => { 
   try {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user');
    res.json(tasks);
   } catch (error) {
    return res.status(500).json({message: 'Tarea no encontrada'})
   }
 }

export const createTask = async (req, res) => { 
    try {
        const {title, description, date} = req.body;
    console.log(req.user);
  const newTask =  new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const saveTask = await newTask.save();
    res.json(saveTask);
    } catch (error) {
        return res.status(404).json({message: 'Tarea no encontrada'})
    }
 }
export const getTask = async (req, res) => { 
    try {
        const task = await Task.findById(req.params.id);
    if(!task) return res.status(404).json({message: "La tarea no existe"})
    res.json(task)
    } catch (error) {
        return res.status(404).json({message: 'Tarea no encontrada'})
    }
 }

export const deleteTask = async (req, res) => { 
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message: "La tarea no existe"})
    return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({message: 'Tarea no encontrada'})
    }
 }

 export const updateTask = async (req, res) => { //1:39:25
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body);
    if(!task) return res.status(404).json({message: "La tarea no existe"})
    res.json(task)
    } catch (error) {
        return res.status(404).json({message: 'Tarea no encontrada'})
    }
 }
