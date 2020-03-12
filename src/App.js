import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        
        <Person name='Snigdha' major='Math'></Person>
        <Person name='Nazmul' major='EE'></Person>




      </header>
    </div>
  );
}

function Person(props){
   
   return(<div style={{border:'2px red solid', width:'400px',margin:'10px',borderRadius:'8px'}}>

<h2>Student Name:{props.name}</h2>
<h3>Student Major:{props.major}</h3>

   </div>)
}

export default App;
