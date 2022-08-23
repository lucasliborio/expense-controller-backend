import { IAuthContextState } from "../../models/login/auth-context-model";
import { LoginTypes } from "../../models/login/login-action";


export interface Action {
  type: LoginTypes
  payload?: any
}
export const authReducer = (state: IAuthContextState, action: Action): IAuthContextState => {
  const { type, payload } = action
  const { credentials } = state
  switch (type) {
    case "change-input":
      return { ...state, credentials: { ...credentials, [payload.name]: payload.value } }
    case "logged-in":
      return {...state, ...payload}
    default:
      return { ...state }
  }
}