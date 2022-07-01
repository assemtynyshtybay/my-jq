import { Button, Container, styled } from "@mui/material";
import { FC } from "react";

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
export type Job = {
  title: string;
  id: number
}
type Props = {
  job: Job
}
export const JobItem:FC<Props> = ({job}) => {
  console.log(job);

    return(  
    <Box >  
        <Title>{job.title}</Title>
        <Description>BLA BLA </Description>
        <Salary>1900</Salary>
        <Button 
        variant="contained" 
        style={{fontSize: '15px',padding: '6px', color: "white", backgroundColor: '#9D355D'}}
        >Apply Now</Button>
    </Box>
    
    )
}