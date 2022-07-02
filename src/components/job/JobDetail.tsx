import React, { useEffect, useState } from 'react';
import { Button, Container, styled } from '@mui/material';
import { FC } from 'react';
import { Job } from '../types/jobsTypes';
import { useNavigate, useParams } from 'react-router-dom';
type Props = {
  job: Job;
};
const Box = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  font-size: 26px;
  /* background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%); */
`;
const Description = styled('div')``;
const Salary = styled('div')``;
const Title = styled('div')``;
const Time = styled('div')``;
const JobDetails = () => {
  const params = useParams();
  const [job, setData] = useState<Job>();
  const [similarJobs, setSimilarJobs] = useState<Job[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);
  console.log('job', job);
  return (
    <>
      {job && (
        <Box>
          <Title>{job.name}</Title>
          <Time>{job.published_at}</Time>
          <Description>{job.schedule.name}</Description>
          <Salary>
            {job.salary?.from}тг до {job.salary?.to}тг{' '}
          </Salary>
          <Button
            variant="contained"
            style={{
              fontSize: '15px',
              padding: '6px',
              width: '20%',
              color: 'white',
              backgroundColor: '#9D355D',
              marginTop: '10px',
            }}>
            Откликнуться
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            style={{
              fontSize: '15px',
              padding: '6px',
              color: 'white',
              width: '20%',
              backgroundColor: '#9D355D',
              marginTop: '10px',
            }}>
            Назад
          </Button>
        </Box>
      )}
    </>
  );
};

export default JobDetails;
