import React, {useState,useEffect,useRef} from 'react'
import './App.css';
 
function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
   prevName.current = name
 }, [name])
  return (
    <div className="App">
      <>
        <input value={name} onChange={(e => setName(e.target.value))} />
        <p>My name is {name} and it used to be {prevName.current} </p>
      </>
    </div>
  );
}

export default App;
