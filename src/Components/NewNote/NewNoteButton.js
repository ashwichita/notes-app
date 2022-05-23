import './NewNoteButton.css'

const NewNoteButton = (props) => {

    const newNoteHandler = () =>{
        props.func(true)
    }

    return(
        <button className='new-note-button' onClick={newNoteHandler}>
            <h1>+</h1> 
        </button>
    )
}

export default NewNoteButton;