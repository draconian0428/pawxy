import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { IMAGES } from 'constants/images';

interface VideoComp_props {
    imgURL: string;
    description: string;
    title: string;
    view_counters: string;
    time: number;
}

export const VideoComp = (props: VideoComp_props) => {
    return (
        <Wrapper>
            <img src={props.imgURL}></img>

            <Container>
                <DescContainer>
                    <p>
                        {
                            props.description
                        }
                    </p>
                </DescContainer>
                <TitleContainer>
                    <p>
                        {
                            props.title
                        }
                    </p>
                </TitleContainer>

                <InfoContainer>
                    <div className='icon-container'>
                        <img src={IMAGES.YOUBUTE_LOGO}></img>
                        <p>Youbute.com</p>
                    </div>

                    <p className='view'>
                        {props.view_counters + ' views'}
                    </p>
                </InfoContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    margin: '10px 0',
    gap: '10px',
    overflow: 'hidden',
    height: '90px',
    backgroundColor: 'white',
    borderRadius: '6px',
    img: {
        borderRadius: '6px',
    },

    '*': {
        fontFamily: 'Barlow-Regular'
    }
}))

const Container = styled(Box)(() => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}))

const DescContainer = styled(Box)(() => ({
    height: '32px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    p: {
        fontSize: '14px',
        lineHeight: '16px',
        color: '#2B2F39',
        padding: 0,
        margin: 0,
        wordBreak: 'keep-all',
        fontFamily: 'Barlow-Bold'
    }
}))

const TitleContainer = styled(Box)(() => ({
    p: {
        color: '#9499A6',
        fontSize: '10px',
        lineHeight: '10px',
    }
}))

const InfoContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.icon-container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '5px',
        img: {
            width: '10px'
        },
        p: {
            color: '#5D6067',
            fontSize: '10px',
            lineHeight: '10px',
        }
    },
    '.view': {
        color: '#5D6067',
        fontSize: '10px',
        lineHeight: '10px',
    }
}));