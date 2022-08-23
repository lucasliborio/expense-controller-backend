import { Container } from "@mui/material"
import "./index.css"

interface Props {
  children: React.ReactElement
}
export const CustomContainer = ({ children }: Props) => {
  return (
    <Container maxWidth="md">
      {children}
    </Container>
  )
}