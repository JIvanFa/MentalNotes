import { useTasks } from "../context/TasksContext";
import {Link} from 'react-router-dom'
import  utc  from "dayjs/plugin/utc"
import dayjs from "dayjs";
dayjs.extend(utc)
function TaskCard({task}) {
    const {deleteTask} = useTasks()
    return (
        <div className="bg-slate-500 max-w-md w-full p-10 rounded-md">
           <header className="flex justify-between">
           <h1 className="text-2xl font-bold">{task.title}</h1>
            <div className="flex gap-x-2 items-center">
                <button onClick={()=>{
                    deleteTask(task._id)
                }}
                className="bg-red-500 rounded-md px-3 py-2"
                >Borrar</button>

                <Link to={`/tasks/${task._id}`}
                className='bg-indigo-800 px-3 py-2 rounded-md'
                >Editar</Link>

            </div>
           </header>
            <p className="text-slate-300">{task.description}</p>
            <p>{
                dayjs(task.date).utc().format("DD/MM/YYYY")
                }</p>
        </div>
    )
}

export default TaskCard;