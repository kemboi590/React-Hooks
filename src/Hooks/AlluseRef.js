import React, {useState, useEffect,useRef} from 'react'
import './App.css';
 
function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  const inputRef = useRef() 
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current+1 
  })
  useEffect(() => {
    prevName.current = name
  },[name])

  function focus() {
    inputRef.current = inputRef.current.focus()
  }

  return (
    <div className="App">
      <>
        <input ref={inputRef} value={name} onChange={(e => setName(e.target.value))} />
        <p>My name is {name} and my previous name was {prevName.current }</p>
        <p>i have rendered {renderCount.current} times</p>
        <button onClick={focus}>FOCUS</button>
      </>
    </div>
  );
}

export default App;
