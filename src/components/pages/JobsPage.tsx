
import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { JobItem } from "../job/JobItem";
import {useDispatch, useSelector} from "react-redux";
import { jobs } from "../store/reducers/jobs";
import { fetchJobs } from "../store/actions/jobActionCreator";
import { AnyAction } from "redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Grid, styled } from "@mui/material";
import { JobState } from "../types/jobsTypes";

export function JobsPage(){

    const jobs = useTypedSelector((state: any) => state.job.jobs)
    const dispatch = useDispatch();
    console.log('jobs', jobs)
    
    useEffect(() => {
        dispatch(fetchJobs() as any);
    }, [dispatch])  
    return(
        <Grid container spacing={3} >
            {
                jobs?.map((item: any) => 
                <Grid item xs={4}>
                    <JobItem key={item.id} job={item}/>
                </Grid>
                )
            }
        </Grid>
    ) 
}




