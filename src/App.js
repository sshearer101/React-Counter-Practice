import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <div>

      </div>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
      <div>
        {count}
      </div>
    </div>
  );
}

export default App;
