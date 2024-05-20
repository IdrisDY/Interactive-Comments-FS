import React, { useState } from 'react'

const Modal = ({handlecloseClick}) => {
const [btnClicked, setbtnClicked] = useState(false)
const [closeClicked, setcloseClicked] = useState(false)

window.onclick= function(e){
}
function cancelClick(){
   !closeClicked?setcloseClicked(true):setcloseClicked(false)
   setbtnClicked(false)
    }
function handleopenClick(){
   if(!btnClicked)
   {setbtnClicked(true)}
   else{ 
      setbtnClicked(false)
   }
   setcloseClicked(false)
}
  return (
<>
<div className="container" id="myContainer">
   <div id="myModal" className={!btnClicked?" is-hidden is-visuallyHidden":'Modal ModalOpen'}>
  <div className="Modal-content">
    <h3>Delete comment</h3>
    <p> Are you sure you want to delete this comment?This will remove the comment and cant be undone.</p>
 <div>
    <button onClick={cancelClick}> NO, CANCEL</button>
    <button id="closeModal" className={closeClicked? "Close":""} onClick={handlecloseClick}>YES,DELETE</button>

 </div>
  </div>
</div>
<button  className=''  id="myBtn"  onClick={handleopenClick}><svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg></button>

</div>


</>


  )
}

export default Modal