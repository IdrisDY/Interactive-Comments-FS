import { createContext, useReducer } from "react"

export const CommentContext =  createContext()

export const commentReducer = (state,action)=>{
  switch (action.type) {
    case 'SET_WORKOUTS':
        return{
            commentInformation:action.payload
        }

    case 'CREATE_WORKOUTS':
        return{
            commentInformation:[action.payload ,...state.workouts]
        }
    case 'DELETE_WORKOUT':

        return{
            commentInformation:state.workouts.filter(item=>item._id !== action.payload._id)
        }
    default:
        return state
        break;
}

}
export function CommentContextProvider({children}){

  const [state,dispatch] = useReducer(commentReducer,{
    commentsInformation:[]
  })

  return <CommentContext.Provider value={{...state,dispatch}}>
    {children}
  </CommentContext.Provider>
}

