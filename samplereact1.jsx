import './App.css'
import { useState } from 'react';
function App() {
  const [count,setCount]=useState(0);
  return(
   <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
       <div><CustomButton count={count*100} setCount={setCount}></CustomButton></div>
      <div><CustomButton count={count*1000} seCount={setCount}></CustomButton></div> 
       </div> 
  )
}
function CustomButton(promp){
  function clicked(){
    promp.setCount(promp.count+1);
  }
  return <button onClick={clicked}>counter {promp.count}</button>
}

export default App
