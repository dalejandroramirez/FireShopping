import React, { useEffect, useState } from 'react'
import { Task } from '../models/task.model'
import { addNewTask, deleteTask, getTasks, updateTask } from '../../firebase/taskController'

const TaskList = () => {

  const [task, setTask] = useState(new Task());

  const [tasks, setTasks] = useState([]);

  const [mode, setMode] = useState('add')

  const createNewTask = async () => {
    await addNewTask(task);
    setTask({ title: "", description: "" })
    inicializeTasks()
  }

  const updateExistingTask = async () => {
    await updateTask(task)
    setTask({ title: "", description: "" })
    inicializeTasks();
    setMode("add")
  }

  const inicializeTasks = () => {
    getTasks()
      .then(t => setTasks([...t]))
      .catch(e => console.error(e))
  }

  // Update
  const editTask = id => {
    setMode("update")
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ ...taskToEdit })
  }


  // Delete
  const removeTask = async id => { 
    await deleteTask(id);
    inicializeTasks();
   }

  useEffect(() => {
    inicializeTasks()
  }, [])


  return (
    <div>
      <span className="text-xl font-semibold text-orange-700"> FireShopping Task</span>
      <div className='flex flex-col gap-1'>
        <input
          type='text'
          value={task.title}
          placeholder="Titulo"
          className='border shadow outline-none focus:ring ring-orange-400 rounded px-2 py-1 w-fit'
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          type='text'
          rows={3}
          value={task.description}
          placeholder="Description"
          className='border shadow outline-none focus:ring ring-orange-400 rounded px-2 py-1  w-full'
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />

        <button className='text-white rounded shadow py-1 bg-orange-400 
        hover:bg-orange-500 hover:text-black transition'
          onClick={() => mode === "add" ? createNewTask() : updateExistingTask()}>
          {mode === "add" ? "agregar" : "Actualizar"}
        </button>
        {/* <button className='text-white rounded shadow py-1 bg-orange-400 
        hover:bg-orange-500 hover:text-black transition'
          onClick={getTasks}>Obtener Tareas</button> */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {tasks.map(task => (
          <div key={task.id} className='py-4 flex flex-col gap-4'>
            <div className='rounded-lg border border-orange-300 p-4 flex flex-col gap-2'>
              <h1 className='font-semibold'>{task.title}</h1>
              <div className='border-t border-orange-300'></div>
              <p>{task.description}</p>
              <div className='flex justify-between'>
                <button className='bg-blue-700 text-white py-1 px-2 rounded-lg' onClick={() => editTask(task.id)}>editar</button>
                <button
                  className='bg-red-600 text-white py-1 px-2 rounded-lg'
                  onClick={() =>
                    window.confirm(`Seguro quiere eliminar la tarea ${task.title}?`) && 
                    removeTask(task.id)}>eliminar
                </button>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default TaskList