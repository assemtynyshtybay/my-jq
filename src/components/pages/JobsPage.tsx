
import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { Job, JobItem } from "../job/JobItem";
import {useDispatch, useSelector} from "react-redux";
import { jobs } from "../store/reducers/jobs";
import { fetchJobs } from "../store/actions/jobActionCreator";
import { AnyAction } from "redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

export function JobsPage(){

    const jobs = useTypedSelector((state: any) => state.job.jobs)
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchJobs() as any);
    }, [dispatch])  
    return(
        <>
            {
            jobs?.map((item: any) => 
            <JobItem key={item.id} job={item}/>
            )

            }
        </>
    ) 
}




