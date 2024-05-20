import { createContext } from "react"

export const CommentContext =  createContext({msg:'reason'})

export function CommentContextProvider({children}){

  return <CommentContext.Provider value={'Moogli'}>
    {children}
  </CommentContext.Provider>
}

