import axios from "axios";
import { Job } from "../../job/JobItem";

export const fetchJobs = () => {
    axios.get<Job[]>('https://api.hh.ru/vacancies').then((res) => {return res.data})
    
}


