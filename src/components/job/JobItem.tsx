import { Button, Container, styled } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../types/jobsTypes';

const Box = styled('div')`
  text-align: start;
  width: 340px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  border: 2px solid #333333;
  box-shadow: 0px 1px 4px rgba(119, 97, 97, 0);
  background: #ffffff;
  border-radius: 20px;

  /* background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%); */
`;

const Company = styled('div')``;

const Title = styled('div')`
  font-weight: bold;
  font-size: x-large;
`;

// const Time= styled('div')`

// `
const Description = styled('div')``;
const Salary = styled('div')``;

type Props = {
  job: Job;
};
export const JobItem: FC<Props> = ({ job }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Company>{job.employer.name}</Company>
      <Title>{job.name}</Title>
      <Description>{job.schedule.name}</Description>

      {/* <Time>Создано: {job.published_at}</Time> */}

      <Salary>
        {job.salary?.from}тг до {job.salary?.to}тг{' '}
      </Salary>
      <Button
        variant="contained"
        onClick={() => navigate(`/job-details/${+job.id}`)}
        style={{ fontSize: '15px', padding: '6px', color: 'white', backgroundColor: '#9D355D' }}>
        Откликнуться
      </Button>
    </Box>
  );
};
