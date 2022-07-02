import { Dispatch } from 'react';
import { JobActionType } from '../../types/jobsTypes';
 
export const fetchJobs = ({page = 0, perPage= 9, search = ''}={}) =>(dispatch: Dispatch<any>) => {
    fetch(`https://api.hh.ru/vacancies?page=${page}&per_page=${perPage}&text=${search}`).then((res) => {
        return res.json();
    }).then(data => {
        console.log('full', data)
        dispatch({type: JobActionType.FETCH_JOBS, payload: data.items});
        dispatch({
                type: JobActionType.FETCH_PAGE,
                payload: {
                    page: data.page,
                    total_pages: +Math.min(data.pages, 100)
                }
            })
    })
};



