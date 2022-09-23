import Calendar from "react-calendar"
import { useState } from 'react'
import './Streak.css'

export default function Streak() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <div className='calendar-container bg-white'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    )
}