
import { TodoCounter } from './components/todoCounter/TodoCounter';
import { TodoSearch } from './components/todoSearch/TodoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';


const defaultTodos = [
  { text: 'Terminar curso de react', completed: false },
  { text: 'Enviar todos los trabajos', completed: false },
  { text: 'Organizar mi habitación', completed: false },
  { text: 'pagar el internet', completed: true },
  { text: 'Comprar galletas', completed: false },
]
//Este es el componente "App"
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [
    searchValue,  //valor actual
    setsearchValue //funcion para cambiar el valor actual   
  ] = React.useState('');

  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo => (
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  )));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text

    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text

    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (  //este ya no es un componente, es lo que nos retorna, los elementos internos del componente
    <>
      <TodoCounter completed={completeTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue} setsearchValue={setsearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList >

      <CreateTodoButton />
    </>
  ); //esto ya no es react, esto es jsx, una sintaxis que permite combinar js con xml

} //Esta funcion ya es un componente, si en recat encontramos una funcion con la primera letra en mayuscula comunmente es un componente 




export default App;
