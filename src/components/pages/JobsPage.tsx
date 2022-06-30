
import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { Job, JobItem } from "../job/JobItem";
// import {useDispatch, useSelector} from "react-redux";
import { fetchJobs } from "../store/actions/fetchJobs";

  
export function JobsPage(){
    // const jobs = useSelector((state) => state.jobs.jobs)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchJobs())
    // }, [dispatch])  
    const jobs = fetchJobs()

    return(
        <>
            {
                jobs && jobs.map((item) => {
                    <JobItem key={item.id} job={item}/>
                })
            }
        </>
    ) 
}

function useCallBack(arg0: void, arg1: never[]) {
    throw new Error("Function not implemented.");
}

