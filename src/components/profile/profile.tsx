import { TextSnippetOutlined } from '@mui/icons-material';
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container style={{ padding: '20px', textAlign: 'center' }}>
      <Typography fontSize={40}>Ваш профиль</Typography>
      <FormGroup onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <OutlinedInput {...register('email')} id="email" type="text" label="E-mail" />
        </FormControl>
        <Button>Обновить</Button>
      </FormGroup>
    </Container>
  );
};
export default Profile;
