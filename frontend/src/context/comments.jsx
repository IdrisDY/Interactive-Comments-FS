import { createContext, useReducer } from "react";

export const CommentContext = createContext();

export const commentReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return {
        commentInformation: action.payload,
      };

    case "CREATE_COMMENT":
      return {
        commentInformation: [
          {
            comments: [action.payload, ...state.commentInformation[0].comments],
          },
          { userInfo: state.commentInformation.userInfo },
        ],
      };
    case "UPDATE_COMMENT":
      console.log("update");
      return {
        commentInformation: [
          {
            comments: [
              ...state.commentInformation[0]?.comments?.map((item) => {
                if (action.payload.id === item.id) {
                  return action.payload;
                }
                return item;
              }),
            ],
          },
          { userInfo: state?.commentInformation?.userInfo },
        ],
      };
    case "DELETE_WORKOUT":
      return {
        commentInformation: state.workouts.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
      break;
  }
};
export function CommentContextProvider({ children }) {
  const [state, dispatch] = useReducer(commentReducer, {
    commentsInformation: [],
  });

  return (
    <CommentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
}
