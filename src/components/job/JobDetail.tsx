import React, { useEffect, useState } from 'react';
import { Button, styled } from '@mui/material';
import { Job } from '../types/jobsTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Box = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
  font-size: 50px;
  /* background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%); */
`;
const SimilarJob = styled('button')`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 26px;
  text-align: left;
  /* background: linear-gradient(180deg, rgba(150, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 99.79%); */
`;
const SimilarJobs = styled('div')`
  display: flex;
  margin: 0 auto;
  width: 55%;
  overflow-x: auto;
`;
const Title = styled('div')`
  font-weight: bold;
  color: #000000;
`;

const Description = styled('div')``;
const Salary = styled('div')``;

const Time = styled('div')``;
const Text = styled('div')`
  margin: 0 auto;
  width: 55px; ;
`;

const JobDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [job, setData] = useState<Job>();
  const [similarJobs, setSimilarJobs] = useState<Job[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    fetch(`https://api.hh.ru/vacancies/${params.id}/similar_vacancies`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('similar', data);
        setSimilarJobs(data.items);
      });
  }, [params.id]);

  return (
    <>
      {job && (
        <Box>
          <Title>
            {job.name}/{job.schedule.name}{' '}
          </Title>
          <Time>{job.published_at}</Time>
          <Salary>
            Зарплата:
            {job.salary ? '' : 'Не указано'}
            {job.salary?.from} {job.salary?.from ? 'KZT' : null} {job.salary?.to ? 'до' : null}{' '}
            {job.salary?.to} {job.salary?.to ? 'KZT' : null}
          </Salary>
          <Button
            variant="contained"
            style={{
              fontSize: '15px',
              padding: '10px',
              width: '20%',
              color: 'white',
              backgroundColor: '#9D355D',
              marginTop: '20px',
            }}>
            Откликнуться
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            style={{
              fontSize: '15px',
              padding: '10px',
              color: 'white',
              width: '20%',
              backgroundColor: '#9D355D',
              marginTop: '20px',
            }}>
            Назад
          </Button>
        </Box>
      )}

      <hr />
      <Text>Similar Jobs </Text>

      <SimilarJobs>
        {similarJobs?.map((job) => (
          <SimilarJob onClick={() => navigate(`/job-details/${+job.id}`)}>
            <Title>{job.name}</Title>
            <Time>{job.published_at}</Time>
            <Description>{job.schedule.name}</Description>
            <Salary>
              Зарплата:
              {job.salary ? '' : 'Не указано'}
              {job.salary?.from} {job.salary?.from ? 'KZT' : null} {job.salary?.to ? 'до' : null}{' '}
              {job.salary?.to} {job.salary?.to ? 'KZT' : null}
            </Salary>
          </SimilarJob>
        ))}
      </SimilarJobs>
    </>
  );
};

export default JobDetails;
