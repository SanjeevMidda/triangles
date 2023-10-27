import { useState } from 'react';
import './index.css';

function App() {

  const [state, setState] = useState(true);

  return (
    <div className="App" onClick={() => {setState(!state)}}>
      <div className="container">
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
        <div className={state? "block" : "block blockTransition"}></div>
      </div>
    </div>
  );
}

export default App;
