
import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <div className='todo-counter'>
            <h1>
                Has completado {completed} de {total} TODOS
            </h1>
            <input type='range' min="0" max={total} value={completed} readOnly></input>
        </div>
    );
}
export { TodoCounter };
