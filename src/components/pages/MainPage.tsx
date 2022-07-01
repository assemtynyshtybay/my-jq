import { JobItem } from "../job/JobItem";
import { Search } from "../search-panel/Search";
import { JobsPage } from "./JobsPage";

export function MainPage(){
    return(
        <div>
            <Search />
            <JobsPage />
            
        </div>
    )
}

// export default MainPage;
