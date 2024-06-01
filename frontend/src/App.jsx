import './App.css';
import Comment from './Comments/Comment';
import{createContext, useEffect,useState} from 'react'
import Modal from './Comments/Modal';
import Post_Comment from './Comments/Post-Comment';
import Reducer from './Comments/reply';
import useCommentContext from './hooks/useCommentContext';

function App() {

  const {commentInformation,dispatch} = useCommentContext()

useEffect( ()=>{
  async function call (){
    try {
      const response = await fetch('/api/comments',{method:'GET'})
      const json = await response.json()
      dispatch({type:'SET_COMMENTS',payload:json})
    } catch (error) {
      console.log(error)
    }
  }
  call()
},[])


  return (
    <div className="App">
     <Comment details={commentInformation} />
     {/* {data} */}
    </div>
  );
}

export default App;
