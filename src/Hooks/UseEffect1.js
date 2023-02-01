import React, {useState, useEffect} from 'react'
import './App.css';
 
function App() {
  const [resourceType, setResourceTye] = useState('posts')
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType])
 
  return (
    <div className="App">
      <div>
      <div> 
        <button onClick={() => setResourceTye('posts')}>Posts</button>
        <button onClick={() => setResourceTye('users')}>Users</button>
        <button onClick={() => setResourceTye('comments')}>Comments</button>
        </div>
        <h1>{resourceType} </h1>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
        </div>
    </div>
  );
}

export default App;
