import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {
  return (
    <div className="search-container">
      <input type="search" placeholder="Buscar Todo" className="search-input" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
        //aqui le hacemos console.log cuando se realiza el evento del input con el terget accedemos al input e imprimimos el valor 
      }} />
    </div>
  );
}
export { TodoSearch };
