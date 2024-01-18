import { useState } from 'react'

function App() {
  const [todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"by 8"
  },
  {
    id:2,
title:"go to college",
description:"by 9"
  }])
  function addTodo(){
    setTodos([...todos,{
      id:3,
      title:"go to tution",
      description:"by 9"
    }])
  }
  return (
      <div>
        <button onClick={addTodo}>clickHere</button>
        {todos.map(todo=> <Todo title={todo.title} description={todo.description}/>)}
      </div>
  )
}
function Todo({title,description}){
  return <div>
    <h1> {title}</h1>
    <h2>{description}</h2>
  </div>
}
export default App
