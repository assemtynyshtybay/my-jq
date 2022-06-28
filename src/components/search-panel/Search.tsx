import styled from "@emotion/styled";
import { FormControl, OutlinedInput } from "@mui/material";
import search  from "../assets/search-svgrepo-com.svg"
import '../Search.css';

const styledImage = styled('img')`
    color: rgba(0,0,0,0.5);
`


export const Search = () => {
    return (
        <div className="container">
        
        <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
        <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<img src={search} className="S-logo" alt="logo" />}
            aria-describedby="outlined-weight-helper-text"
            // inputProps={{
            //   'aria-label': 'weight',
            // }}
        />
        {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>


        </div>
        // <div className="container">
        // <img  src={search} className="S-logo" alt="logo" />
        // <input type="text" placeholder="Поиск по загаловку"/>
        // </div>
    )
}
