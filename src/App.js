import React, {useState} from "react";
import notes from "./assets/notes.js";
import "./App.scss";

// Making NoteButton component. Can separate this later into it's own file
const NoteButton = props => {
  console.log("PROPS", props);
  return (
    <button 
      className = "note-button"
      style ={{height: (200 - (15 * props.index) + 'px')}}
      onClick={() => {
      props.setPlayedNotes([...props.playedNotes ,props.note]);
      new Audio(props.note.file).play();
      }}>
        
      {props.note.name}
    </button>
  );
};

function App() {
  const [playedNotes, setPlayedNotes] = useState([])

  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        
        {notes.map((noteObj, index) => (
          <NoteButton
            index={index}
            playedNotes = {playedNotes}
            setPlayedNotes = {setPlayedNotes}
            key={noteObj.name} 
            note={noteObj}/>
        ))}
      </div>
      {JSON.stringify(playedNotes)}
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
