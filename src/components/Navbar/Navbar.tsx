import React from 'react';
import {
  AppBar,
  Box,
  Button,
  styled,
  Container,
  Toolbar,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_jq.svg';
import style from '../../style/style';

const Img = styled('img')`
  padding: 5px;
`;

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={style}>
      <AppBar position="static" color="secondary">
        <Container fixed>
          <Toolbar disableGutters>
            <Img src={logo} className="App-logo" alt="logo" />
            <Box sx={{ flexGrow: 0.1 }}>
            <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Главная
            </Button>
            </Box>
            <Box sx={{ flexGrow: 3}}>
            <Button
                onClick={() => navigate('/about-us')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                О нас
            </Button>
            </Box>
            <Box sx={{ flexGrow: 0}}>
            <Button
                onClick={() => navigate('/sign-in')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Вход
            </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Button
                onClick={() => navigate('/sign-up')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Регистрация
            </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
