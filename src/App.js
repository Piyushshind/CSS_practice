import { useState } from 'react';
import './App.css';

function App() {
  const [first, setfirst] = useState(true)
  function handle(){
    setfirst(!first)
  }
  return (
    <>
        <button onClick={handle}>cjk</button>
        {first ? <div>rdd  </div>: <div>pink</div>}
    </>
  );
}

export default App;
