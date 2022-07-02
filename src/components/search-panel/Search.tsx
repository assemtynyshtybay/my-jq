// import styled from "@emotion/styled";
import { Button, FormControl, OutlinedInput, ThemeProvider } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import search from '../../assets/search-svgrepo-com.svg';
import style from '../../style/style';
import './Search.css';

// const styledImage = styled('img')`
//     color: rgba(0,0,0,0.5);
// `
type Props = {
  getSearchPanelData:(arg: any) => void;
};

export const Search: FC<Props> = ({ getSearchPanelData }) => {
  const [searchF, setSearch] = useState('');
  const handleSearchData = useCallback(() => {
    getSearchPanelData(searchF);
  }, [searchF]);
  return (
    <ThemeProvider theme={style}>
      <div className="container">
        <FormControl sx={{ m: 2, width: '100ch' }} variant="outlined">
          <OutlinedInput
            color="secondary"
            style={{ borderRadius: '10px', fontSize: '16px' }}
            value={searchF}
            onChange={(e) => setSearch(e.target.value)}
            endAdornment={<img src={search} className="S-logo" alt="logo" />}
            aria-describedby="outlined-weight-helper-text"
            // inputProps={{
            //   'aria-label': 'weight',
            // }}
          />
          {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>

        <Button
          color="secondary"
          size="large"
          style={{ fontSize: '20px', padding: '5px', marginRight: '10px' }}
          variant="text"
          onClick={handleSearchData}>
          Поиск
        </Button>
      </div>
    </ThemeProvider>
    // <div className="container">
    // <img  src={search} className="S-logo" alt="logo" />
    // <input type="text" placeholder="Поиск по загаловку"/>
    // </div>
  );
};
