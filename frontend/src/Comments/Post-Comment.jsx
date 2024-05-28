import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import PostedComment from "./Posted";
const InputComment = ({ buttonAction, postClick }) => {
  const [message, setMessage] = useState("");
  const [btnclick, setbtnClick] = useState(false);
  const [move, setMove] = useState(false);

  const type = (e) => {
    const text = e.target.value;
    setMessage(text);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    postClick(message);
    setMessage("");
  };
  const txtAreaDisabled = message.length === 0;
  // function postClick(){
  //    !btnclick?setbtnClick(true):setbtnClick(false)
  // }
  // text.onclick = function(event){
  //    console.log(event.target.value)
  return (
    <div className="flex flex-col-reverse md:flex-row relative rounded-lg bg-white mb-6 gap-6 px-4 py-4 items-start min-w-full">
      <div className="w-fit ">
        <img
          src="./images/avatars/image-juliusomo.webp"
          className="w-[40px]"
          alt=""
        />
      </div>
      <form className="flex w-full gap-6 ">
        <textarea
          placeholder="Add a comment ..."
          className="w-full h-[100px] rounded p-2 border focus:outline-[#5457b6] "
          onChange={type}
          type="text"
        />
        <button
          className=" text-white bottom-[16px] right-[16px] absolute md:static rounded-lg py-2 px-3 h-fit   bg-[#5457b6] hover:bg-opacity-85 cursor-pointer"
          disabled={txtAreaDisabled}
          onClick={onSubmit}
        >
          {" "}
          {buttonAction}
        </button>
      </form>
    </div>
  );
};

export default InputComment;
