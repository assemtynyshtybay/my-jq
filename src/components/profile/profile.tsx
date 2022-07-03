import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from '../../style/style';

const Box = styled('div')`
  margin: 0 auto;
  width: 50%;
`;
const formValidation = yup.object().shape({
  email: yup
    .string()
    .required('**Почта обязательна!')
    .max(50, '**Длина пароля должна быть не менее 8 символов!')
    .matches(/^\S+@\S+$/i, '**Не правильный формат!'),
  phone: yup
    .string()
    .required('**Телефон обязателен!')
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g, '**Не правильный формат!'),
  fname: yup.string().required('**Имя обязательно!').max(50, '**Длина привышает!'),
  sname: yup.string().required('**Фамилия обязательна!').max(50, '**Длина привышает!'),
});
const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formValidation),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ThemeProvider theme={style}>
      <Container style={{ padding: '20px', textAlign: 'center' }}>
        <Box>
          <Typography fontSize={50}>Ваш профиль</Typography>
          <FormGroup
            style={{
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            }}
            onSubmit={handleSubmit(onSubmit)}>
            <Typography color="secondary" fontSize={30}>
              Контактные данные
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="email">*E-mail</InputLabel>
              <OutlinedInput {...register('email')} id="email" type="text" label="E-mail" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="phone">*Номер телефона</InputLabel>
              <OutlinedInput {...register('phone')} id="phone" type="text" label="phone" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="fname">*Имя</InputLabel>
              <OutlinedInput {...register('fname')} id="fname" type="text" label="fname" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="sname">*Фамилия</InputLabel>
              <OutlinedInput {...register('sname')} id="sname" type="text" label="sname" />
            </FormControl>
            <Typography color="secondary" fontSize={30}>
              Основная информация
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <TextField
                id="date"
                label="Дата рождения"
                type="date"
                size="medium"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('brth')}
                style={{ marginTop: '25px' }}
              />
            </FormControl>
            <FormControl style={{ display: 'flex', textAlign: 'left', margin: '10px 10px' }}>
              <FormLabel id="demo-radio-buttons-group-label">Пол:</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="Female" control={<Radio />} label="Женский" />
                <FormControlLabel value="Male" control={<Radio />} label="Мужской" />
                <FormControlLabel value="Other" control={<Radio />} label="Другое" />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="citizenship">Гражданство</InputLabel>
              <OutlinedInput
                {...register('citizenship')}
                id="citizenship"
                type="text"
                label="E-mail"
              />
            </FormControl>
            <FormControl style={{ display: 'flex', textAlign: 'left', margin: '10px 10px' }}>
              <FormLabel id="demo-radio-buttons-group-label">Опыт работы:</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="yes" control={<Radio />} label="есть" />
                <FormControlLabel value="no" control={<Radio />} label="нет" />
              </RadioGroup>
            </FormControl>
            <Typography color="secondary" fontSize={30}>
              Образование
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="univer">Университет</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Univer" />}>
                <MenuItem key="1">КБТУ</MenuItem>
                <MenuItem key="2">АУЭС</MenuItem>
                <MenuItem key="3">МУИТ</MenuItem>
                <MenuItem key="4">СДУ</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="degree">Степень</InputLabel>
              <OutlinedInput {...register('degree')} id="degree" type="text" label="E-mail" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="specialty">Специальность</InputLabel>
              <OutlinedInput {...register('specialty')} id="specialty" type="text" label="E-mail" />
            </FormControl>
            <Button
              type="submit"
              style={{ margin: '20px 100px' }}
              size="large"
              color="secondary"
              variant="outlined">
              Обновить
            </Button>
          </FormGroup>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Profile;
