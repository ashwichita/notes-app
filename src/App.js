import "./App.css";
import Notes from "./Components/Notes/Notes";
import Switch from "./Components/Switch/Switch";
import { useState } from 'react';

function App() {

  const DUMMY_NOTES = [
    {
      id: '1',
      title: 'My Notes App 1.0',
      text: 'simple CRUD application for managing notes.'
    },
    {
      id: '2',
      title: 'v1.1',
      text: 'added dark mode, modals, completed css.',
    },
    {
      id: '3',
      title: 'v1.2',
      text: 'added basic funcionality, add note, edit note half way',
    },
    {
      id: '4',
      title: 'Not complete!',
      text: 'coming soon',
    },
  ];

  const[notes, setNotes] = useState(DUMMY_NOTES);
 

  const addNoteHandler = note =>{
    setNotes(prevNotes => {
      return [note, ...prevNotes]
    });
  };


  


  return (
    <div className="App">
      <Notes notes={notes} onAddNote={addNoteHandler}/>
      <Switch />
    </div>
  );
}

export default App;
