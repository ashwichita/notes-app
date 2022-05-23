import './Note.css'

const Note = (props) =>{



    const clickHandle = () =>{
        props.func(true)
        props.editNoteData(props.title, props.text)
        
    }




    return(
        <div className='Note' onClick={clickHandle}>
            <div className='Content'>
            <h2 className='Title'>{props.title}</h2>
            <p className='Text'>{props.text}</p>
            </div>
            <label className='Date'>{props.date}</label>
        </div>
    )
}

export default Note;