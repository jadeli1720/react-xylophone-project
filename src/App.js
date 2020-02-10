import React from 'react';
import notes from './assets/notes.js';
import './App.scss';


// Making NoteButton component. Can separate this later into it's own file
const NoteButton = (props) => {
  console.log("PROPS", props)
  return (
    <button onClick={() => new Audio(notes[0].file).play() } >
      {props.note.name}
    </button>
  )
}

function App() {
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {notes.map(note => <NoteButton note={note} /> )}
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
