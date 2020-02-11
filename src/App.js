import React, {useState} from "react";
import notes from "./assets/notes.js";
import "./App.scss";

// Making NoteButton component. Can separate this later into it's own file
const NoteButton = props => {
  // console.log("PROPS", props);
  return (
    <button 
      className = "note-button"
      style ={{height: (200 - (15 * props.index) + 'px')}}
      onClick={() => {
      props.addPlayedNote(props.note)
      new Audio(props.note.file).play();
      }}>
        
      {props.note.name}
    </button>
  );
};

function App() {
  const [playedNotes, setPlayedNotes] = useState([])
  
  const replayNotes = () => {
    playedNotes.map((note, index) => {
      window.setTimeout(() => new Audio(note.file).play(), 500 * index);
    });
  };

  const resetNotes = () => {
    setPlayedNotes([])
  }

  // Limits the access of setPlayedNotes function from the component NoteButton and reducing the amount of props that need to be passed to the child component
  const addPlayedNote = (note) => {
    setPlayedNotes([...playedNotes ,note]);
  }

  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        
        {notes.map((noteObj, index) => (
          <NoteButton
            index={index}
            addPlayedNote = {addPlayedNote}
            key={noteObj.name} 
            note={noteObj}/>
        ))}
      </div>
      <div className="bottom">
        <div className="note-container">
          {JSON.stringify(playedNotes)}
        </div>
    
        <div className="button-container">
          <button onClick={() => replayNotes() } >Replay</button>
          <button onClick={() => resetNotes()} >Clear</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
