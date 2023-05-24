import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { PText } from 'components/display/text';

import { IMAGES } from 'constants/images';

export const SHearder = () => {
    return (
        <Wrapper>
            <img src={IMAGES.HEADER_LOGO} width={20}></img>
            <PText>Simple Video Search Engine</PText>
        </Wrapper>
    )
}

export const Wrapper = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    gap: "8px",
    alignItems: 'center'
}))