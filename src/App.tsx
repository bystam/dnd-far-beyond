import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from './firebase';

const store = new Store();

function App() {

  const [sandbox, setSandbox] = useState({value: ''});

  useEffect(() => {
    return store.readSandbox((value) => setSandbox(value));
  }, [setSandbox]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The sandbox value is</p>
        <h4>{sandbox.value}</h4>
        <input placeholder="Value" onChange={(event) => store.writeSandbox({value: event.target.value})}></input>
      </header>
    </div>
  );
}

export default App;
