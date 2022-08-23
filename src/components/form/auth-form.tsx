import { Button,Stack, TextField } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../context/login/auth-context"
import { CustomContainer } from "../container/custom-container"
import logo from '../../assets/Expense.svg'
import './index.css'

export const AuthFormComponent = () => {
  const { changeInput, credentials } = useContext(AuthContext)
  return (
    <CustomContainer>
      <Stack
        className="form-stack"
        spacing={3}
      >
        <img
          alt="ex-controller-logo"
          id="form-logo"
          src={logo}>

        </img>
        {Object.entries(credentials).map(([key, value], index: number) => {
          console.log(key, value)
          return (
            <div key={index}>
              <TextField
                color="success"
                name={key}
                title={key}
                value={value}
                placeholder={key}
                onChange={({ target }) => changeInput(target.name, target.value)}
              />
            </div>
          )
        })}
        <Button
          style={{ backgroundColor: "#3BD80D",color:"#363636" }}
          variant="contained"
          fullWidth={true}
        >
          Log In
        </Button>

      </Stack>
    </CustomContainer>
  )
}