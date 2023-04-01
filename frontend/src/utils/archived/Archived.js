import { useEffect, useState } from 'react'
import '../../App.css'
const url = process.env.REACT_APP_API_BASE_URL

export default function Archived({path, title}) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`${url}${path}/archived`)
            .then((response) => response.json())
            .then((results) => {
                const arrData = Object.values(results)
                let tasks = []
                for (let task of arrData) {                    
                    for (let i=0; i<=arrData.length; i++) {
                        tasks.push(task[i].task_description)
                    }                    
                }    
                setData(tasks)
            })
    }, [path])
    
    const output = data.map((item, key) => {
        if (!item) {
            return null;
        }
        return (
            <li key={key} className='task mx-5'>
                {item}
            </li>
        )
    })
    return (
        <>
            <h3 className='h3 text-center mt-5 mx-5'>{title}</h3>
            <ul>
                {output}
            </ul>
        </>
    )}