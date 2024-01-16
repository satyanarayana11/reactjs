import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <HomeButton/>
    <Header title="my name is satya">my name is satya narayana reddy</Header>
     </>
  )
}
function HomeButton(){
  const [title,setTitle] = useState("my name is satyanarayana reddy");
  function reCreatenew(){
    setTitle("my name is: "+ Math.floor((Math.random()*10)).toString());
  }
  return <div><button onClick={reCreatenew}>Change the content</button>
  <Header title={title}></Header>
  </div>
}
function Header({title}){
  return <div>{title}</div>
}

export default App
