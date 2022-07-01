import { Button, Container, styled } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Job } from "../types/jobsTypes";

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
type Props = {
  job: Job
}
export const JobItem:FC<Props> = ({job}) => {
    const navigate = useNavigate()
    return(  
    <Box >  
        <Title>{job.name}</Title>
        <Time>{job.published_at}</Time>
        <Description>{job.schedule.name}</Description>
        <Salary>{job.salary?.from}тг до {job.salary?.to}тг </Salary>
        <Button 
          variant="contained"
          onClick={() => navigate(`/job-details/${+job.id}`)}
          style={{fontSize: '15px',padding: '6px', color: "white", backgroundColor: '#9D355D'}}
        >Откликнуться</Button>
    </Box>
    
    )
}