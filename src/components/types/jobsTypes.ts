import { ApplicableRefactorInfo } from "typescript";
import { string } from "yup";

export enum JobActionType {
    FETCH_JOBS = 'FETCH_JOBS',
   
};
export type Area = {
    id: string;
    name: string | null;
    url: string | null;
}
export type Salary = {
    from?: number | null ;
    to?: number | null ;
    currency: string;
    gross: boolean;
}
export type Snippet= {
    requirement: string | null;
    responsibility: string | null;
}
type Schedule = {
    id: string| null;
    name: string| null;
}
export type Job = {
    id: string;
    name: string;
    department: string | null;
    has_test: boolean;
    area: Area;
    salary: Salary | null;
    schedule: Schedule;
    published_at: string;
    created_at: string;
    description: string;  
    snippet: Snippet;  
};

export type JobState = {
    jobs: Job[];
    loading: boolean;

};
export type FetchJobAction = {
    type: JobActionType.FETCH_JOBS,
    payload: any;
};


export type JobAction = FetchJobAction;
 