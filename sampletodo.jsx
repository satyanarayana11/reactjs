import './App.css'
import { useState } from 'react';
function App() {
  const [todo ,setTode]=useState([{
    title:"goto college",
    description:"its time to goto college"
  },{
    title:"have launch",
    description:"launch time"
  }])
  function addTodo(){
    return setTode([...todo,{
    title:"add something new",
    description:"learn Dsa"
  }
])
 }
  return(
   <div>
       <button onClick={addTodo}>Add todo</button>
       {
        todo.map(function(Todo){
          return <Tox title={Todo.title} description={Todo.description}></Tox>
        })
       }
    </div>
  )
  function Tox(props){
    return <span>
        <span><h2>{props.title} : </h2> <h4>{props.description}</h4></span>
      </span>
  }
}
export default App
