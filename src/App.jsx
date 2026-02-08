import { useState } from 'react';
import '../src/App.css';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const App = () => {
  const [count , setCount] = useState(0);

const toast = (text, type = "success") => {
  const styles = {
    success: {
      background: "black",
      boxShadow: "0 0 15px rgba(0, 255, 0, 0.6)",
      borderRadius: "8px",
      color: "green",
      border: "3px solid green"
    },
    warning: {
      background: "black",
      boxShadow: "0 0 15px rgba(255, 255, 0, 0.6)",
      borderRadius: "8px",
      color: "yellow",
      border: "3px solid yellow"
    },
    error: {
      background: "black",
      boxShadow: "0 0 15px rgba(255, 0, 0, 0.6)",
      borderRadius: "8px",
      color: "red",
      border: "3px solid red"
    },
  };

  Toastify({
    text,
    duration: 2500,
    gravity: "top",
    position: "center",
    close: true,
    style: styles[type],
  }).showToast();
};


  const increament = () => {
    setCount((preview) => preview + 1);
    toast("+1 qo‘shildi ✅", "success");
  }

  // const decreament = () => {
  //   setCount((preview) => preview - 1);
  // };     manfiy ifodali sonlar kerak bo'lsa

  const decreament = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
    toast("-1 ayirildi ❌", "error");
  }

  const reset = () => {
    setCount(0);
    toast("Counter reset qilindi 🔄", "warning");
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