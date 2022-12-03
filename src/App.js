import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

const [case1, setcase1] = useState=("1")
const [case2, setcase2] = useState=("2")
const [case3, setcase3] = useState=("3")
const [case4, setcase4] = useState=("4")
const [case5, setcase5] = useState=("5")
const [case6, setcase6] = useState=("6")
const [case7, setcase7] = useState=("7")
const [case8, setcase8] = useState=("8")
const [case9, setcase9] = useState=("9")
const [name, setName] = useState=("")

const setX = () => {
  setcase1('X');
}

  return (

    <div className="App">


<div className="testzzz">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("Harry Potter")}>Change name</button>
    </div>

      <div className='container'>
        <div className='morpion'>

          <div className='row'> 

            <div className="case" onClick={setX} >{case1}</div>
            <div className="case">{case4}</div>
            <div className="case">{case7}</div>

          </div>

          <div className='row'> 

            <div className="case">{case2}</div>
            <div className="case">{case5}</div>
            <div className="case">{case8}</div>

          </div>

          <div className='row'> 

            <div className="case">{case3}</div>
            <div className="case">{case6}</div>
            <div className="case">{case9}</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
