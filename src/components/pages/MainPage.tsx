import { Container, styled } from "@mui/material";
import { Search } from "../search-panel/Search";
import JobsPage from "./JobsPage";


const Header =  styled('h1')`
/* text-align: center;
padding: 10px;
margin-top: 85px;
margin: 25px; */
position: absolute;
/* width: 710.17px;
height: 147px; */
left: 750px;
top: 85px;
text-align: center;
`

export function MainPage(){
    return(
        <Container fixed>
        <Header>Мы нашли для вас работу!</Header>
            <Search />
            <JobsPage />
        </Container>
    )
}

export default MainPage;

