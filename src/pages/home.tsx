import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { SHearder } from 'components/header/shearder';
import { SFooter } from 'components/footer/sfooter';
import { SearchInput } from 'components/inputs/search-input';
import { VideoComp } from 'components/video-comp/videoComp';

import { BsArrowRightShort } from 'react-icons/bs';

import { IMAGES } from 'constants/images';


interface VideoComp_props {
  imgURL: string;
  description: string;
  title: string;
  view_counters: string;
  time: number;
}

const VideoDatas = [
  {
    imgURL: IMAGES.VIDEO_1,
    description: 'K-pop group BLACKPINK to release Ready For Love on July 29. Details inside. - India Today',
    title: 'Blackpink',
    view_counters: '65m',
    time: 255,
  },
  {
    imgURL: IMAGES.VIDEO_DEFAULT,
    description: `Blackpink's Lisa, Jennie, Rosé, and Jisoo on First Full Album and Global Fame`,
    title: `Koreaboo`,
    view_counters: '30m',
    time: 0,
  },
  {
    imgURL: IMAGES.VIDEO_3,
    description: `Must Watch: Blackpink Cover 'Elle,' 'Vogue' Launches New Podcast - Fashionista`,
    title: 'BP Fans',
    view_counters: '387k',
    time: 255,
  },
  {
    imgURL: IMAGES.VIDEO_4,
    description: `Must Watch: Blackpink Cover 'Elle,' 'Vogue' Launches New Podcast - Fashionista`,
    title: 'Kpop News',
    view_counters: '529k',
    time: 255,
  },
  {
    imgURL: IMAGES.VIDEO_5,
    description: `Must Watch: Blackpink Cover 'Elle,' 'Vogue' Launches New Podcast - Fashionista`,
    title: `Kpop News`,
    view_counters: '123k',
    time: 255,
  },
]

const Home = () => {

  return (
    <Wrapper>
      <SHearder />
      <SearchInput></SearchInput>

      {/* {
        VideoDatas.map((item: VideoComp_props, index: any) => (
          <VideoComp {...item} key={index} />
        ))
      } */}

      <Button variant="contained">{`Next ->`}</Button>
      <SFooter />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
}));

