import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { BiSearch } from 'react-icons/bi';
import styled from '@emotion/styled';


export const SearchInput = () => {

    return (
        <StyledFormControl sx={{ m: 1, width: '100%', margin: 0 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search...</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            endAdornment={
              <StyledInputAdornment position="end">
                <BiSearch></BiSearch>
              </StyledInputAdornment>
            }
            label="Password"
          />
        </StyledFormControl>
    )
}

const StyledFormControl = styled(FormControl)(() => ({
  marginTop: '20px',
  backgroundColor: 'white',
  border: '0px' ,
}));

const StyledInputAdornment = styled(InputAdornment)(() => ({
  svg: {
    color: '#2A8CFF',
    transform: 'scale(1.2)'
  }
}));