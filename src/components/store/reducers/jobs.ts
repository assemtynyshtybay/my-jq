import { Action } from "history";
import { Reducer } from "react";
import { JobAction, JobActionType, JobState } from "../../types/jobsTypes";

const initState: JobState = {
    jobs: [],
    page: 0,
    total_page: 100, 
    per_page: 20,
    loading: false ,
};

export const jobs: Reducer<JobState, JobAction> = (
    state = initState,
    action: any,
    ) => {
        const newState = {...state};
        
        switch (action.type) {
            case JobActionType.FETCH_JOBS:
                newState.jobs = action.payload;
                break;
            case JobActionType.FETCH_PAGE:
                newState.page = action.payload+1;
                console.log('page',newState.page)
                break
            default:
                return state;
    }
    
    return newState;
};