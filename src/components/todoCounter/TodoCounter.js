
import './TodoCounter.css'
import { CircularInput, } from 'react-circular-input';


function TodoCounter({ total, completed }) {
  return (
    <div className='todo-counter'>
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
      <div className='circular-input-label'>
      <CircularInput
        value={total === 0 ? 0 : completed / total}
      />
      </div>
    </div>
  );
}
export { TodoCounter };
