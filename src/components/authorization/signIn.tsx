import React, { useState } from 'react';
import {
  Container,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel,
  ThemeProvider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import style from '../../style/style';

const Form = styled('form')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  padding: 20px 20px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const Buttons = styled('div')`
  margin: 0 auto;
`;

const SignIn = () => {
  const [cVisibility, setCVisibility] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  function handleClose() {
    setIsOpen(false);
  }
  const handleClickShowPassword = () => {
    setCVisibility(!cVisibility);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={style}>
      <Container maxWidth="sm">
        <div className="sign-in">
          <Form>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Имя пользователя</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                label="Имя пользователя"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={cVisibility ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {!cVisibility ? (
                        <VisibilityOff color="secondary" />
                      ) : (
                        <Visibility color="secondary"  />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Пароль"
              />
            </FormControl>
            <Buttons>
              <Button type="submit" variant="contained" color="secondary">
                Войти
              </Button>
            </Buttons>
            {/* { token ? 'AUTHORISED' : 'NOT AUTHORISED'} */}
          </Form>
          <Dialog onClose={handleClose} open={isOpen}>
            <DialogTitle>{text}</DialogTitle>
          </Dialog>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
