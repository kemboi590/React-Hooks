import React, {useState, useEffect,useRef} from 'react'
import './App.css';
 
function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current+1 
  })
  return (
    <div className="App">
      <>
        <input value={name} onChange={(e => setName(e.target.value))} />
        <p>My name is {name}</p>
        <p>i have rendered {renderCount.current} times</p>
      </>
    </div>
  );
}

export default App;
