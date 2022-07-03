import { Container, styled } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { Search } from '../search-panel/Search';
import JobsPage from './JobsPage';

const Header = styled('h1')`
  padding: 50px auto 20px;
  margin-Top: 50px;
  margin-Bottom: -70px;
  font-size: 50px;
  text-align: center;
`;
type Props = {
  token: string | null;
};
const MainPage: FC<Props> = ({token}) => {
  const [search, setSearch] = useState('');
  const handleGetSearchPanelData = useCallback((data: any) => {
    setSearch(data);
  }, []);
  return (
    <Container fixed>
      {token ? (
        <Header>Мы нашли для вас работу!</Header>
      ) : (
        <Header>Мы найдем для вас работу!</Header>
      )}
      <Search getSearchPanelData={handleGetSearchPanelData} token={token}/>
      <JobsPage search={search} />
    </Container>
  );
};
export default MainPage;
