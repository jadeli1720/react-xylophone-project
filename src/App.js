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
        <NoteButton note={notes[0]} />
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
        {/* <button onClick={() => new Audio(notes[0].file).play() }>c</button> */}
        <button>d1</button>
        <button>e1</button>
        <button>f</button>
        <button>g</button>
        <button>a</button>
        <button>b</button>
        <button>c2</button>
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
