
import React, { useState } from 'react'


const App = () => {
  const [conter, setcounter] = useState(0);
  
  const increment =()=>{
    setcounter(conter + 1)

  };
  const decrement =()=>{
    if (conter > 0) {
      setcounter(conter - 1)
      
    }
  };

  const reset =()=>{
    setcounter(0)
  }
  
  return (
    <div className='container'>
      <h2 className='app'>counter app</h2>
      <div className='App'></div>
      <span id='conter'>{conter}</span><br />
    <button onClick={increment}>Increase </button>
    <button onClick={decrement}>Decrease</button>
    <button onClick={reset}>Reset</button>
    
    </div>
  )
}

export default App