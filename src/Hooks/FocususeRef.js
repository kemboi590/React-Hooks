import React, {useState,useRef} from 'react'
import './App.css';
 
function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  function StayFocus(){
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <>
        <input ref={inputRef} value={name} onChange={(e => setName(e.target.value))} />
        <p>My name is {name}</p>
        <button onClick={StayFocus}>FOCUS</button>
     
      </>
    </div>
  );
}

export default App;
