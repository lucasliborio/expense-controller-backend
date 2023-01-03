
import { LoginCredentials } from "../../models/login/login-credentials"
import { server } from "../../service/api"
import { Action } from "./auth-reducer"

export const login = (dispatch: React.Dispatch<Action>) => async (credentials: LoginCredentials) => {
  try {
    const response = await server.post('/login', {
      username: credentials.username,
      password: credentials.password
    })
    const { token, profileId, username } = response.data

    if (response.data.code === 200) {
      dispatch({ type: 'logged-in', payload: { token, profileId, username } })
    }
  } catch (err: any) {
    dispatch({ type: 'error' })
  }
}

export const changeInput = (dispatch: React.Dispatch<Action>) => (name: string, value: any) => {
  dispatch({ type: 'change-input', payload: { name, value } })
}
