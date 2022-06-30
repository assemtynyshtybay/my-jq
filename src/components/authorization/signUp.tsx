import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { useForm, SubmitHandler } from 'react-hook-form';
import style from '../../style/style';
import { User } from '../../types/user';
import axios from 'axios';

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
const formValidation = yup.object().shape({
  password: yup
    .string()
    .required('**Пароль обязателен!')
    .min(8, '**Пароль должен содержать как минимум 8 символов!'),
  cPassword: yup
    .string()
    .required('**Подтвердите пароль!')
    .min(8, '**Пароль должен содержать как минимум 8 символов!')
    .oneOf([yup.ref('password')], '**Пароли не совпадают!'),
});

const SignUp = () => {
  const [cVisibility, setCVisibility] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    mode: 'onTouched',
    resolver: yupResolver(formValidation),
  });
  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log(data);
    sendUserData(data);
  };
  function handleClose() {
    setIsOpen(false);
  }
  const handleClickShowPassword = () => {
    setCVisibility(!cVisibility);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const sendUserData = (userData: User) => {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkn13xO0ineF9mhiNyIOQTKWf7GnJWKLM`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        },
      )
      .then((data) => {
        console.log(data);
        setText('Успешно✅');
        setIsOpen(true);
      })
      .catch((error) => {
        console.log({ ...error });
      });
  };

  return (
    <ThemeProvider theme={style}>
      <Container maxWidth="sm">
        <div className="sign-in">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">E-mail</InputLabel>
              <OutlinedInput
                {...register('email', {
                  required: '**Почта обязательна!',
                  minLength: {
                    value: 8,
                    message: '**Длина пароля должна быть не менее 8 символов',
                  },
                  maxLength: 50,
                  pattern: /^\S+@\S+$/i,
                })}
                id="outlined-adornment-password"
                type="text"
                label="E-mail"
              />
              {/* {errors.email?.type === 'required' && 'Почта обязательна!'} */}
            </FormControl>
            {/* <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Имя пользователя</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  label="Имя пользователя"
                />
              </FormControl> */}
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
              <OutlinedInput
                {...register('password')}
                id="outlined-adornment-password"
                type={!cVisibility ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {cVisibility ? (
                        <VisibilityOff color="secondary" />
                      ) : (
                        <Visibility color="secondary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Пароль"
              />
              {errors.password?.type === 'required' && 'Password is required'}
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Повторите пароль</InputLabel>
              <OutlinedInput
                {...register("cPassword")}
                id="outlined-adornment-password"
                type={!cVisibility ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {cVisibility ? (
                        <VisibilityOff color="secondary" />
                      ) : (
                        <Visibility color="secondary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Повторите пароль"
              />
              {errors.cPassword?.type === 'required' && ''}
            </FormControl>
            <Buttons>
              <Button type="submit" variant="contained" color="secondary">
                Регистрация
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

export default SignUp;
