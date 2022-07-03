import { Favorite } from '@mui/icons-material';
import { Container, FormControl, Grid, styled } from '@mui/material';
import { useCallback, useState } from 'react';
import { Search } from '../search-panel/Search';
import Favourites from './Favourites';
import JobsPage from './JobsPage';


const Header = styled('h1')`
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

const MainPage = () => {
  const [search, setSearch] = useState('');
  const handleGetSearchPanelData = useCallback((data: any) => {
    setSearch(data);
  }, []);
  return (   
    <Container >
      <Grid item xs={12} md ={3} sm = {6} ></Grid>
    <Header>Мы нашли для вас работу!  </Header>
      <Search getSearchPanelData={handleGetSearchPanelData} />
      <JobsPage search={search} />
      <Favourites />   
    </Container>
  
  
  );
}
export default MainPage;
