import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Main = () => {

  return (
    <Wrapper>
      <h1>Hi</h1>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '12px',

  padding: '0px 10px',
  paddingTop: '30px',

  width: '100%',
  height: '100%',
}));
