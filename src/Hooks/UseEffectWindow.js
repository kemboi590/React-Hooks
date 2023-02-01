import React, {useState, useEffect} from 'react'
import './App.css';
 
function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
  setwindowWidth(Window.innerWidth)
}

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])
 
  return (
    <div className="App">
      <div>{windowWidth} </div>
      </div>
  );
}

export default App;
