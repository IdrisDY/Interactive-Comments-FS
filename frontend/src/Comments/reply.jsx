import React from 'react'
import { useReducer } from 'react'


const initialTodos= [{
   id:1,
   title:'Todo1',
   complete:false
},
{
id:2,
title:'Todo2',
complete:false

}]

console.log(initialTodos)
const reducer= (state,action)=>{
switch(action.type){
   case 'COMPLETE':
      return state.map(todo=>{
         if(todo.id === action.id){
            return{...todo,complete: !todo.complete};
          
         }
         else{
            return todo
         }
      })
      default:
      return state;
}
}



const Reducer = () => {
 const [todos,dispatch]= useReducer(reducer, initialTodos)
 const handleComplete=(todo)=>{
    dispatch({type:'COMPLETE', id:todo.id})
 }

  return (
    <div> Reducer 
    
    {todos.map(todo=>(
       <div key= {todo.id}>
       <label>
       <input type='checkbox'
       checked={todo.complete}
       onchange={()=>handleComplete(todo)}/>
       {todo.title}
       </label>
       </div>
    ))}
    
    </div>
  )
}

export default Reducer