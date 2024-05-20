
import { useContext } from "react";
import { CommentContext } from "../context/comments";

function useCommentContext (){

const context = useContext(CommentContext)
return context
}