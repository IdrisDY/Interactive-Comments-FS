import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import   InputComment from './Post-Comment'
import Modal from './Modal'
import PostedComment from './Posted'
import NewComment from './reply'
const Comment = () => {


const [comments, setComment] = useState([])
const [rep, setRep] = useState(false)
const [scoreval, setScoreval] = useState()
const [loading, setLoading] = useState(true)
const [delclick, setdelClick] = useState(false)
const [replyId, setReplyId] = useState(0)
const [editId, setEditId] = useState(0)
const [messageclick, setMessageclick] = useState(false)

const [replyclick, setreplyclick] = useState(false)
const [editclick, setEditclick] = useState(false)
// const [message, setMessage] = useState("")
const [currentUser, setcurrentUser] = useState({})
const [commentreply, setCommentreply]= useState([])
const [del, setDel]= useState(false)



// new object template to be pushed to reply array;content = message in state


/**
 * When the user clicks on the reply button, the replyclick state is set to true, and the message state
 * is set to the message that the user wants to reply to.
 * @param message - the message that the user typed in
 * @param replyId - the id of the comment that the user is replying to
 */


function handleMessage(message,id){
   console.log('addtext', message,id)
!replyclick?setreplyclick(true):setreplyclick(false)
setMessageclick(true)

// const userobj = {
//         id :Math.random(new Date()),
//    user: {
//       ...currentUser
//     },
//      content:message,
//      Parentid:replyId,
   
// }
// setMessage(message)
console.log(userobj)
comments.map((reply)=>{
const {replies,id}=reply
console.log(id)
if(id === userobj.Parentid){replies.push(userobj)}
// ?:<PostedComment/>
 })
}


const handleDelete=(id,e)=>{
   console.log(id)
 const newComment = comments.reduce(function(acc, curr){
   console.log(comments.replies)
  const newv= comments.map(comment=>{
  const array =  comment.replies.filter(rep => rep.id !== id)
   setRep(true)
   acc = array
  console.log(array)
  setComment(array)
   })
},[])


}

function handleclick(id){
   setReplyId(id)
   console.log(id)
   setreplyclick(false)
   !messageclick ?setMessageclick(true):setMessageclick(false)

}
function handleEdit(id,message){
   setEditId(id)
setEditclick(true)
console.log(message)
}
   useEffect(() => {
   
const getData =  async() => {
const data = await fetch('data.json',{
      headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
}})   


const resp = await data.json()
        setLoading(false)
        setComment(resp.comments)
         console.log(resp.comments.replies)
         setcurrentUser(resp.currentUser)
         comments.map(comment=>{
         //  let newComArr=   comment.filter(com=> com.id == )
         })
         console.log(  commentreply)
       }
       getData()
  
     }, [])

     if(loading){
      return <h1> Loading ...</h1>
   }



  return (
    <div className='container'>
       {/* Mapping main comments */}
{
comments.map(comment=>{
   const { id, content, createdAt, score, user:{image,username},replies} = comment
   const {png, webp}= image
console.log (comments)

   return(
      <div key={id} className='reply-container'>
      

{/* <NewComment png={png} username={username} key={id} score={score} content={content} createdAt={createdAt} replies={getReplies(id)}/> */}


<div  className='user-profile'>
   <img src={png} alt='' className='user-img'/>
   <h4> {username} </h4>
   <span> {createdAt}</span> 
</div>
<div  className='main'>
   <p>{content}</p>

</div>
   <div className='score-card'>
      <div class='score-calc'>
      <svg onClick={()=>setScoreval(scoreval+1)} width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
        <span id='score-id'>{score}</span> 
       <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg> 
       </div>

   <div className='reply'> <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <button id='reply-text' onClick={()=>handleclick(id)} >Reply</button>
   </div>
</div>

{/* This is a ternary operator. It is checking if the replyId is equal to the id of the comment that the
user is replying to. If it is, then it will render the InputComment component. If it is not, then it
will render null. */}

{replyId === id && !editclick && !messageclick?<InputComment buttonAction='REPLY' postClick={handleMessage}/>:null}
<div> 

<div>
{/* Mapping the replies  */}

{
  replies.length > 0 && 
replies.map(rep=>{
   console.log(comment.replies) 
   const { id, content, createdAt, score, user:{image,username},} = rep

const {png, webp}= image
const  newCreatedAt = new Date(rep.createdAt).toLocaleDateString()
console.log(rep.score) 
   console.log('mapinho')
if(del & id === 4){return null}
if(editclick && editId === id){
   return <InputComment buttonAction='UPDATE' postClick={handleMessage} />
}
   return(
      <div key={rep.id} className='comment-container'>
<div  className='user-profile'>

   <img src={png} alt='' className='user-img'/>
   <h4> {username} </h4>
   <span> {createdAt}</span> 
   {username === 'juliusomo'?
      <div>
   <Modal handlecloseClick={()=>handleDelete(id)}/>
   <button><span onClick={()=>handleEdit(id)} >Edit</span><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg></button>
   </div>:null}
</div>

<div  className='main'>
   <p>{content}</p>

</div>
   <div className='score-card'>
      <div class='score-calc'>
      <svg onClick={()=>setScoreval(scoreval+1)} width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
        <span id='score-id'>{score}</span> 
       <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg> 
       </div>

   <div className='reply'> <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <button id='reply-text' onClick={()=>handleclick(id)} >Reply</button>
   </div>
</div>
</div>)


})

  }
  
   </div>



</div>















</div>

   


   )
})
}





<InputComment buttonAction='SEND'/>

    </div>  )
}

export default Comment