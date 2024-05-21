import './App.css';
import Comment from './Comments/Comment';
import{createContext, useEffect,useState} from 'react'
import Modal from './Comments/Modal';
import Post_Comment from './Comments/Post-Comment';
import Reducer from './Comments/reply';

function App() {

useEffect( ()=>{
  async function call (){
    try {
      const response = await fetch('/api/comments',{method:'GET'})
      const json = await response.json()
      console.log(json,"Oh my sins")
  
    } catch (error) {
      console.log(error)
    }
  }
  call()
},[])


  return (
    <div className="App">
     <Comment/>
     {/* {data} */}
    </div>
  );
}

export default App;
