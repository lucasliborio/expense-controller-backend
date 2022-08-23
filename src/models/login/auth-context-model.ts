import { LoginCredentials } from "./login-credentials";

export type IAuthContextState = {
  credentials: LoginCredentials
}
export type IAuthContextModel = IAuthContextState & {
  changeInput: (name: string, value: any) => void
}