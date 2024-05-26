import React, { createContext } from "react";
import { useState, useEffect } from "react";
import InputComment from "./Post-Comment";
import Modal from "./Modal";
import PostedComment from "./Posted";
import NewComment from "./reply";
import useCommentContext from "../hooks/useCommentContext";
const Comment = ({ details }) => {
  const [commentInfoInView, setCommentInfoInView] = useState({});
  const [rep, setRep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [replyId, setReplyId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [messageclick, setMessageclick] = useState(false);

  const [replyclick, setreplyclick] = useState(false);
  const [editclick, setEditclick] = useState(false);
  const [del, setDel] = useState(false);

  // new object template to be pushed to reply array;content = message in state

  /**
   * When the user clicks on the reply button, the replyclick state is set to true, and the message state
   * is set to the message that the user wants to reply to.
   * @param message - the message that the user typed in
   * @param replyId - the id of the comment that the user is replying to
   */

  const { commentsInformation, dispatch } = useCommentContext();
  console.log(commentsInformation);

  async function handleMessage(message, id) {
    !replyclick ? setreplyclick(true) : setreplyclick(false);
    setMessageclick(true);

    const userobj = {
      user: {
        ...details[1].userInfo[0],
      },
      content: message,
      type:'reply',
      replyingTo:`@${commentInfoInView.user.username}`,
      parentId: commentInfoInView.id,
    };

    if (replyId) {
      const response = await fetch(`/api/comments/${replyId}`, {
        method: "POST",
        body: JSON.stringify(userobj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      console.log(replyId);
      console.log(userobj);
    }
    //  const json = await response.json();
    comments.map((reply) => {
      const { replies, id } = reply;
      console.log(id);
      if (id === userobj.Parentid) {
        replies.push(userobj);
      }

      // ?:<PostedComment/>
    });
  }

  const handleDelete = (id, e) => {
    console.log(id);
    const newComment = comments.reduce(function (acc, curr) {
      const newv = comments.map((comment) => {
        const array = comment.replies.filter((rep) => rep.id !== id);
        setRep(true);
        acc = array;
        setComment(array);
      });
    }, []);
  };

  function handleclick(comment) {
    setCommentInfoInView(comment)
    setReplyId((prevState) => (prevState === comment._id ? 0 : comment._id));
    setreplyclick(false);
    !messageclick ? setMessageclick(true) : setMessageclick(false);
  }
  function handleEdit(id, message) {
    setEditId(id);
    setEditclick(true);
  }

  if (loading) {
    return <h1> Loading ...</h1>;
  }

  return (
    <div className="container">
      {/* Mapping main comments */}
      {details &&
        details[0]?.comments?.map((comment) => {
          const {
            id,
            _id,
            content,
            createdAt,
            score,
            user: { image, username },
            replies,
          } = comment;
          const { png, webp } = image;
          if (comment.type === "comment") {
            return (
              <div key={id}>
                <div className="reply-container">
                  {/* <NewComment png={png} username={username} key={id} score={score} content={content} createdAt={createdAt} replies={getReplies(id)}/> */}

                  <div className="user-profile">
                    <img src={png} alt="" className="user-img" />
                    <h4> {username} </h4>
                    <span> {createdAt}</span>
                  </div>
                  <div className="main">
                    <p>{content}</p>
                  </div>
                  <div className="score-card">
                    <div class="score-calc">
                      <svg
                        onClick={() => setScoreval(scoreval + 1)}
                        width="11"
                        height="11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                          fill="#C5C6EF"
                        />
                      </svg>
                      <span id="score-id">{score}</span>
                      <svg
                        width="11"
                        height="3"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                          fill="#C5C6EF"
                        />
                      </svg>
                    </div>

                    <div className="reply">
                      {" "}
                      <svg
                        width="14"
                        height="13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                          fill="#5357B6"
                        />
                      </svg>
                      <button id="reply-text" onClick={() => handleclick(comment)}>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {replyId === _id ? (
                    <InputComment
                      buttonAction="REPLY"
                      postClick={handleMessage}
                    />
                  ) : null}
                  <div>
                    <div>
                      {/* Mapping the replies  */}

                      {details[0]?.comments
                        .filter((item) => item.type === "reply")
                        .filter((item) => comment.id === item.parentId)
                        .map((rep) => {
                          const {
                            parentId,
                            _id,
                            content,
                            createdAt,
                            score,
                            user: { image, username },
                          } = rep;

                          const { png, webp } = image;
                          const newCreatedAt = new Date(
                            rep.createdAt
                          ).toLocaleDateString();
                          if (del & (id === 4)) {
                            return null;
                          }
                          if (editclick && editId === id) {
                            return (
                              <InputComment
                                buttonAction="UPDATE"
                                postClick={handleMessage}
                              />
                            );
                          }

                          if (comment.id === rep.parentId) {
                            return (
                              <>
                                <div key={rep.id} className="comment-container">
                                  <div className="user-profile">
                                    <img
                                      src={png}
                                      alt=""
                                      className="user-img"
                                    />
                                    <h4> {username} </h4>
                                    <span> {createdAt}</span>
                                    {username === "juliusomo" ? (
                                      <div>
                                        <Modal
                                          handlecloseClick={() =>
                                            handleDelete(id)
                                          }
                                        />
                                        <button>
                                          <span onClick={() => handleEdit(id)}>
                                            Edit
                                          </span>
                                          <svg
                                            width="14"
                                            height="14"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                                              fill="#5357B6"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    ) : null}
                                  </div>

                                  <div className="main">
                                    <p>{content}</p>
                                  </div>
                                  <div className="score-card">
                                    <div class="score-calc">
                                      <svg
                                        onClick={() =>
                                          setScoreval(scoreval + 1)
                                        }
                                        width="11"
                                        height="11"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                                          fill="#C5C6EF"
                                        />
                                      </svg>
                                      <span id="score-id">{score}</span>
                                      <svg
                                        width="11"
                                        height="3"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                                          fill="#C5C6EF"
                                        />
                                      </svg>
                                    </div>

                                    <div className="reply">
                                      {" "}
                                      <svg
                                        width="14"
                                        height="13"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                                          fill="#5357B6"
                                        />
                                      </svg>
                                      <button
                                        id="reply-text"
                                        onClick={() => handleclick(rep)}
                                      >
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {replyId === rep._id ? (
                                  <InputComment
                                    buttonAction="REPLY"
                                    postClick={handleMessage}
                                  />
                                ) : null}
                              </>
                            );
                          } else {
                            return null;
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

      <InputComment buttonAction="SEND" />
    </div>
  );
};

export default Comment;
