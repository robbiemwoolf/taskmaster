import './TaskLayout.css'

export default function TaskLayout({task}) {
    if (!task) {
        return null;
    } else {
        return (
        <ul className='pt-3'>
            <li className='container'>
                <label className='form-check-label task' htmlFor='checktask'>
                <input className='form-check-input checkbox mx-2' type='checkbox' id='checktask'/>
                    {task}
                </label>
            </li>
        </ul>
    )}
}