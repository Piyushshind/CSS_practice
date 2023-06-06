import { useState } from 'react';
import './App.css';

function App() {
  const [ka, ser] = useState(1)
  function handle (){
    ser(a=>a+(a/2))
    console.log("handle run");
  }
  console.log(ka , 'rerender');
  return (
    <>
       <button
       onClick={handle}
       >po</button>
       {ka}
    </>
  );
}

export default App;
