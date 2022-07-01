import React, { useEffect, useState } from 'react';
import { Button, Container, styled } from "@mui/material";
import { FC } from "react";
import { Job } from "../types/jobsTypes";
import { useNavigate, useParams } from 'react-router-dom';
type Props = {
    job: Job;
}
const Box = styled('div')`
  width: 340px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  /* border: 1px solid #333333; */
  margin: 0 0 0 139px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: 20px;
  /* background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%); */
`
const Description=styled('div')`
  
`
const Salary = styled('div')`

`
const Title= styled('div')`
  
`
const Time= styled('div')`
  
`
const JobDetails = () => {
  const params = useParams();
  const [job, setData] = useState<Job>();
  const [similarJobs, setSimilarJobs] = useState<Job[]>();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(
      `https://api.hh.ru/vacancies/${params.id}`,
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);
  console.log('job',job)
    return(
        <>
        {job && (
         <Box >  
            <Title>{job.name}</Title>
            <Time>{job.published_at}</Time>
            <Description>{job.schedule.name}</Description>
            <Salary>{job.salary?.from}тг до {job.salary?.to}тг </Salary>
            <Button 
            variant="contained" 
            style={{fontSize: '15px',padding: '6px', color: "white", backgroundColor: '#9D355D'}}
            >Откликнуться</Button>
         </Box>)
        }
        <Button 
          variant="contained"
          onClick={() => navigate('/')}
          style={{fontSize: '15px',padding: '6px', color: "white", backgroundColor: '#9D355D'}}
        >Назад</Button>
        </>
    )
}

export default JobDetails;