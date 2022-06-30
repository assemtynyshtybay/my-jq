
type Job = {
    name: string,
    company: string,
    time: string,
    salary: number
}
const initState = {
    job: [],
    pageInfo: {
        page: 0,
        maxPage: 50
    }
}

export const JQReducer = (state = initState) => {
    const newState = {...state}
  
    return newState
}