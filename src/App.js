import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)

  function handleIncrease(){
    setCount(count + 1)
  }
  function handleDecrease(){
    setCount(count - 1)
  }
  return (
    <div className="App">
      <div>

      </div>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      
      <div>
        {count}
      </div>
    </div>
  );
}

export default App;
