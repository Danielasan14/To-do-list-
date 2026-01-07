const buttonStyle = {
    width: '70px',
    height: '70px',
    position: 'relative',
    left: '580px',
    top: '50px',
    borderRadius: '50%',
    border: '2px solid #D91656',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    background: '#D91656',
    fontSize: '30px',
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
