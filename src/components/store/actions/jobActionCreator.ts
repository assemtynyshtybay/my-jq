import { Dispatch } from 'react';
import { JobActionType } from '../../types/jobsTypes';
 
export const fetchJobs = 
({page = 0}={}) =>(dispatch: Dispatch<any>) => {
    fetch(`https://api.hh.ru/vacancies`).then((res) => {
        return res.json();
    }).then(data => {
        console.log('full', data)
        dispatch({type: JobActionType.FETCH_JOBS, payload: data.items});
        dispatch({type: JobActionType.FETCH_PAGE, payload: page});
    })
};

export const


