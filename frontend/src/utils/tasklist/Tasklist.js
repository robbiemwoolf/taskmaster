import { useEffect, useState } from "react"
import '../../App.css'
import PopUp from "./PopUp"
import TaskLayout from "./TaskLayout"

const url = process.env.REACT_APP_API_BASE_URL

export default function Tasklist({path, initial}) {
    const [tasks, setTasks] = useState([])
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        fetch(`${url}${path}`)
            .then((response) => response.json())
            .then((results) => {
                const arrData = Object.values(results)
                let tasks = []
                for (let task of arrData[0]) {                    
                    tasks.push(task.task_description)
                }                    
            setTasks(tasks)
            })
    }, [path])

    const output = tasks.map((task, index) => {
        return (
        <TaskLayout key={index} task={task}/>
        )
    })

    return (
        <>
            <div className='text-center  metalfont'>
                <button className="btn btn-secondary mt-5" onClick={() => setModalShow(true)}>
                    Add Tasks
                </button>
            </div>
            <div className='pt-3'>
                {output}
            </div>
            <PopUp
                initial={initial}
                path={path}
                show={modalShow}
                tasks={tasks}
                setTasks={setTasks}
                setModalShow={setModalShow}
            />
        </>
    )
}