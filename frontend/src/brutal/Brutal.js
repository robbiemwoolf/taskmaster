import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Brutal() {
    const title = 'Brutally Smashed'
    const path = '/brutal'
    const initialFormState = {
        task_description: '',
        complete_by: null,  // TODO: add this to the other pages as well
        task_brutal: true,
        task_daily: false,
        task_longterm: false,
        task_archived_brutal: false,
        task_archived_daily: false,
        task_archived_longterm: false,
    }

    return (
        <>
        <Tasklist path={path} initial={initialFormState} />
        <Line />
        <Archived path={path} title={title} />
        </>
    )
}