export enum JobActionType {
    FETCH_JOBS = 'FETCH_JOBS'
}

export type Job = {
    id: number,
    title: string,
    salary: number,
    description: string 
}


export type JobState = {
    jobs: Job[]
}
export type FetchJobAction = {
    type: JobActionType.FETCH_JOBS,
}


export type UserAction = FetchJobAction 
 