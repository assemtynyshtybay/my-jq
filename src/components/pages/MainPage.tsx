import { Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { Search } from '../search-panel/Search';
import JobsPage from './JobsPage';

export function MainPage() {
  const [search, setSearch] = useState('');
  const handleGetSearchPanelData = useCallback((data: any) => {
    setSearch(data);
  }, []);
  return (
    <Container fixed>
      <Search getSearchPanelData={handleGetSearchPanelData} />
      <JobsPage search={search} />
    </Container>
  );
}

export default MainPage;
