import { TextSnippetOutlined } from '@mui/icons-material';
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
  Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

const Box = styled('div')`
  margin: 0 auto;
  width: 50%;
`;

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };
  return (
    <Container style={{ padding: '20px', textAlign: 'center' }}>
      <Box>
        <Typography fontSize={40}>Ваш профиль</Typography>
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <Typography fontSize={30}>Контактные данные</Typography>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <OutlinedInput {...register('email')} id="email" type="text" label="E-mail" />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="phone">Номер телефона</InputLabel>
            <OutlinedInput {...register('phone')} id="phone" type="text" label="E-mail" />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="fname">Имя</InputLabel>
            <OutlinedInput {...register('fname')} id="fname" type="text" label="E-mail" />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="sname">Фамилия</InputLabel>
            <OutlinedInput {...register('sname')} id="sname" type="text" label="E-mail" />
          </FormControl>
          <Typography fontSize={30}>Основная информация</Typography>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="brthd">Дата рождения</InputLabel>
            <OutlinedInput {...register('brth')} id="brthd" type="text" label="E-mail" />
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
          <Typography fontSize={30}>Образование</Typography>
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
          <Button size="large">Обновить</Button>
        </FormGroup>
      </Box>
    </Container>
  );
};
export default Profile;
