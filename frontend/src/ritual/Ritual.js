import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Ritual() {
    const title = 'Rituals Completed'
    const path = '/ritual'
    const initialFormState = {
        task_description: '',
        complete_by: null,
        task_daily: false,
        task_ritual: true,
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