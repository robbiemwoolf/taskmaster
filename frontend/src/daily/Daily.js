import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Daily() {
    const title = 'Daily Destroyed'
    const path = '/daily'
    const initialFormState = {
        task_description: '',
        complete_by: null,
        task_daily: true,
        task_ritual: false,
        task_brutal: false,
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