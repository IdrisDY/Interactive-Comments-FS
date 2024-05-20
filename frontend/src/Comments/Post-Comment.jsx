import React from 'react'
import {useState} from 'react'
import Modal from './Modal'
import PostedComment from './Posted'
const InputComment = ({buttonAction, postClick}) => {
   const [message, setMessage] = useState("")
   const [btnclick, setbtnClick] =  useState(false)
   const [move, setMove]= useState(false)

const type=(e)=>{
   const text = e.target.value
   setMessage(text)
}
const onSubmit =(e)=>{
e.preventDefault()
postClick(message)
setMessage('')
}
const txtAreaDisabled = message.length === 0 
// function postClick(){
//    !btnclick?setbtnClick(true):setbtnClick(false)
// }
// text.onclick = function(event){
//    console.log(event.target.value)
  return (
    <div>
       <form className = 'comment-box' >
<textarea id='inp' onChange={type}  type='text' placeholder='Add a comment'  />
<div className='low-box' >

   <img src='./images/avatars/image-juliusomo.webp' alt=''/>
   <button id='send-btn'  disabled={txtAreaDisabled} onClick={onSubmit} > {buttonAction}
</button>
</div>

</form>

    </div>
  )
}

export default InputComment