import './App.css';
import Comment from './Comments/Comment';
import{createContext, useEffect,useState} from 'react'
import Modal from './Comments/Modal';
import Post_Comment from './Comments/Post-Comment';
import Reducer from './Comments/reply';

function App() {
  return (
    <div className="App">
     <Comment/>
     {/* {data} */}
    </div>
  );
}

export default App;
