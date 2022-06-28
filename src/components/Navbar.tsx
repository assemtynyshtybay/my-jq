import { AppBar, Box, Button, styled, Container, Toolbar } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo_jq.svg"


export const Navbar = () => {
const navigate = useNavigate()
// const {token} = useContext(Auth)

return (
    <AppBar position="static" style={{color: "red"}}>
        <Container fixed >     
                <Toolbar  disableGutters>
                    <img  src={logo} className="App-logo" alt="logo" />

                    <Box sx={{flexGrow: 0.1, display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/main')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                        Главная
                        </Button>
                    </ Box>
                    <Box sx={{flexGrow: 3, display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/main')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                        О нас 
                        </Button>
                    </ Box>
                    <Box sx={{flexGrow:0 , display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/sign-in')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                        Вход 
                        </Button>
                    </ Box>
                    <Box sx={{flexGrow: 0, display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/sign-up')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                        Регистрация  
                        </Button>
                    </ Box>
                </Toolbar>
            </Container>
    </AppBar>

    
)

}


