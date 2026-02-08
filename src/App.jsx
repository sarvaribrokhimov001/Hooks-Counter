
import { useState } from 'react';
import '../src/App.css';


const App = () => {
  const [count , setCount] = useState(0);

  const increament = () => {
    setCount((preview) => preview + 1);
  };

  const decreament = () => {
    setCount((preview) => preview - 1);
  };

  const reset = () => {
    setCount(0);
  }

  return (

  <div>
    <section>

      <h1> {count} </h1>

      <div className="buttons">
        <button className='decreament' onClick={decreament}> - </button>
        <button className='increament' onClick={increament}> + </button>
        <button className='reset' onClick={reset}> Reset </button>
      </div> 

    </section>
  </div>
  )
}
export default App;