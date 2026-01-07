
import './TodoCounter.css'
import { CircularInput, } from 'react-circular-input';


function TodoCounter({ total, completed }) {
    return (
        <div className='todo-counter'>
            <h1>
                Has completado {completed} de {total} TODOS
            </h1>
            <CircularInput
                max={total} value={completed} readOnly>
            </CircularInput>
        </div>
    );
}
export { TodoCounter };
