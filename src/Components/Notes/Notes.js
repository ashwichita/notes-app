import "./Notes.css";
import Card from "../UI/Card";
import Note from "./Note";
import NewNoteButton from "../NewNote/NewNoteButton";
import NewNoteForm from "../NewNote/NewNoteForm";
import EditNoteForm from "./EditNoteForm";
import Modal from "react-modal/lib/components/Modal";
import { useState } from "react";

const Notes = (props) => {
  Modal.setAppElement("#root");

  const [newModalIsOpen, setNewModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [editText, setEditText] = useState('')



 
  const editNoteData = (title, text) =>{
      setEditTitle(title)
      setEditText(text)
 };

  const getUpdatedData = (title, text) =>{
     console.log(title, text)
  };

  const newModalHandler = (data) => {
    setNewModalIsOpen(data);
  };

  const editModalHandler = (data) => {
    setEditModalIsOpen(data);
  };

 

  return (
    <Card className="Notes">
      <Modal
        isOpen={newModalIsOpen}
        className='new-note-modal'
        overlayClassName='new-note-modal-overlay'
      >
        <NewNoteForm func={newModalHandler} onAddNote={props.onAddNote}/>
      </Modal>
      <Modal
        isOpen={editModalIsOpen}
        className='new-note-modal'
        overlayClassName='new-note-modal-overlay'
      >
        <EditNoteForm func={editModalHandler} onAddNote={props.onAddNote} editTitle={editTitle} editText={editText} getUpdatedData={getUpdatedData} />
      </Modal>
      <h1>Notes</h1>
      <div className="Notes-container">
        {props.notes.map((note) => (
          <Note
            key={note.title}
            title={note.title}
            text={note.text}
            date="11.04.2022"
            func={editModalHandler}
            editNoteData={editNoteData}
          />
        ))}
      </div>
      <NewNoteButton func={newModalHandler} />
    </Card>
  );
};

export default Notes;
