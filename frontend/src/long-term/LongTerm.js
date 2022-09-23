import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function LongTerm() {
    const title = 'Long Term Smashed'
    const path = '/longterm'
    const initialFormState = {
        task_description: '',
        task_longterm: true,
        task_daily: false,
        task_brutal: false,
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