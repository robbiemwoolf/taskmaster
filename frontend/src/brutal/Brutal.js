import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Brutal() {
    const title = 'Brutally Smashed'
    const path = '/brutal'
    const initialFormState = {
        task_description: '',
        complete_by: null,
        task_daily: false,
        task_ritual: false,
        task_brutal: true,
        task_complete: false,
        date_completed: null
    }

    return (
        <>
        <Tasklist path={path} initial={initialFormState} />
        <Line />
        <Archived path={path} title={title} />
        </>
    )
}