import { Dispatch } from 'react';
import { JobAction, JobActionType } from '../../types/jobsTypes';



export const fetchJobs = 
() =>(dispatch: Dispatch<any>) => {
    fetch(`https://api.hh.ru/vacancies`).then((res) => {
        return res.json();
    }).then(data => {
        dispatch({type: JobActionType.FETCH_JOBS, payload: data.items});
    })
};


