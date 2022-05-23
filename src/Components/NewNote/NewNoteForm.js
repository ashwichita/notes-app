import "./NewNoteForm.css";
import { useState } from "react";

const NewNoteForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const closeHandler = () => {
    props.func(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const noteData ={
      title: enteredTitle,
      text: enteredText
    };
    props.onAddNote(noteData);
    console.log(noteData);
    setEnteredTitle('');
    setEnteredText('');
    props.func(false);


};


  return (
    <form className="new-note-form" spellCheck="false" onSubmit={submitHandler}>
      <button className="close-button" onClick={closeHandler} type='reset'>
        X
      </button>
      <label>Title</label>
      <input className="title-input" type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
      <label>Text</label>
      <textarea className="text-input" type="text" onChange={textChangeHandler} value={enteredText}></textarea>
      <button className="add-button" type="submit">add</button>
    </form>
  );
};

export default NewNoteForm;
