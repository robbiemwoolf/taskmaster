import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Dailies() {
    const title = 'Daily Smashed'
    const path = '/daily'
    const initialFormState = {
        task_description: '',
        task_daily: true,
        task_brutal: false,
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