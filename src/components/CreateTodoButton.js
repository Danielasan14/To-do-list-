const buttonStyle = {
    width: '56px',
    position: 'fixed',
    right: '30px',
    height: '56px',
    borderRadius: '50%',
    border: '2px solid #5fc3b9',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    background: ' #5fc3b9',
    fontSize: '28px',
}

function CreateTodoButton() {
    return (
        <button style={buttonStyle} 
        onClick={(event)=> {
            console.log('le diste click')
            console.log(event.target)}
        }>+</button>
    );
}
export { CreateTodoButton }; //esto es un export nombrado devuele en obgetox
