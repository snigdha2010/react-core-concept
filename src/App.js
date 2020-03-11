import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var person = {
    name:"Dr. Mahfuz", 
    job:"Singer"
  }

  var person2 = {
    name:"Eva Rahman", 
    job:"kokil konthi"
  }

  var style = {
    color:'red',
    backgroundColor:"yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1 style={style}>My Heading: {person.name +"  " +
        person.job}</h1>

    <h2 style={{color:'red',backgroundColor:"yellow"}}>My Heading 2: {person2.name + " "+person2.job}</h2>
        <p>My First React App!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
