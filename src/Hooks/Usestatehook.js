import React, {useState} from 'react'
import './App.css';
 
function App() {
  const [count, setCount] = useState(() => {
    console.log('run function')
    return 10 
  })
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    setCount(prevcount => prevcount - 1)
    setTheme('green')
  }

  function increamentCount() {
    setCount(prevcount => prevcount + 1)
    setTheme('red')
  }
  return (
    <div className="App">
      <div> 
        <button onClick={decrementCount}>-</button>
        <span> {count}</span>
        <span> {theme}</span>
        <button onClick={increamentCount}>+</button>
        </div>
    </div>
  );
}

export default App;
