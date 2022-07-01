import { Action } from "history";
import { Reducer } from "react";
import { JobAction, JobActionType, JobState } from "../../types/jobsTypes";

const initState: JobState = {
    jobs: [],
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
            default:
            return state;
    }
    
    return newState;
};