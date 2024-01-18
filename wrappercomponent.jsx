import { useState } from 'react'

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent/>}/>
    <CardWrapper innerComponent={<TextComponent2/>}/>
    </div>
}
function TextComponent(){
  return <h1>Hi there</h1>
}
function CardWrapper({innerComponent}){
    return <div style={{border:"2px solid black",padding:20}}>{innerComponent}</div>
}
function TextComponent2(){
  return <h1>Hi there22</h1>
}
export default App
