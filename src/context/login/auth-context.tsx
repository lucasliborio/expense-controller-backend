import React, { createContext, useReducer } from "react";
import { IAuthContextModel, IAuthContextState } from "../../models/login/auth-context-model";
import { authReducer } from "./auth-reducer";
import { changeInput } from "./auth-services";


const defaultValue: IAuthContextState = {
    credentials: {
        username: '',
        password: ''
    }
}

export const AuthContext = createContext({} as IAuthContextModel)
export const AuthContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(authReducer, defaultValue)
    return (
        <AuthContext.Provider value={{
            ...state,
            changeInput: changeInput(dispatch)
        }}>
            {children}
        </AuthContext.Provider>
    )
}
