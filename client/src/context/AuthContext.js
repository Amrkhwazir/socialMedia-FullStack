import { createContext, useReducer,  } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
_id : "64ee282bac71570e58eeddff",
name: "rashid",
email: "rashid@email.com",
profilePicture: "",
coverPicture: "",
followers: [],
following: [],
isAdmin: false,
},
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
    <AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    }}>
         
    {children}
    </AuthContext.Provider>
    
    )
}