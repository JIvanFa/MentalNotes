import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export const TaskFormPage = () => {

  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks()

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask()
  }, [])


  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id,{
        ...data,
        date: dayjs.utc(data.date).format(),
      })
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format(),
        
      })
    }
    navigate('/tasks')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='bg-slate-400 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <label htmlFor='title' className='text-black'>Título</label>
        <input type="text" placeholder="Título"
          {...register('title')}
          className='w-full bg-white text-black px-4 py-2 rounded-md my-2'
          autoFocus />

        <label htmlFor='description' className='text-black'>Descripción</label>
        <textarea rows="3" placeholder="Descripción"
          {...register('description')}
          className='w-full bg-white text-black px-4 py-2 rounded-md my-2' />

        <label htmlFor='date' className='text-black'>Fecha</label>
        <input type='date' {...register('date')} 
        className='w-full bg-white text-black px-4 py-2 rounded-md my-2'/>

        <button className='bg-indigo-800 px-3 py-2 rounded-md'>
          Guardar
        </button>
      </form>
    </div>
    </div>
  )
}
