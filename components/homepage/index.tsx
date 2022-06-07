/* eslint-disable react/display-name */
import { useEffect, useRef, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
// import Navbar from '@/components/navbar';
// import RecentBlog from '@/components/homepage/recent-blog-card';
import Footer from '../../components/footer';
// @ts-ignore
import navigationData from '../../data/homepage/main-navigation.yml';
// @ts-ignore
import extendedData from '../../data/homepage/extended-info.yml';
// @ts-ignore
import linksData from '../../data/homepage/link-units.yml';
// @ts-ignore
import trustData from '../../data/homepage/trust.yml';
// @ts-ignore
import footerData from '../../data/global/footer.yml';
// @ts-ignore
import featuredData from '../../data/homepage/featured.yml';
import styled from '@emotion/styled';
import { WaterMarkImage } from 'assets/js/watermarkImage';
import dynamic from 'next/dynamic';
import MainNavigation from '../common/main-navigation';
//import router, { useRouter } from 'next/router';

const HomepageFeatured = dynamic(() => import('../common/common-featured'), {
  loading: () => <p>Loading...</p>
});
const HomepageLinkUnit = dynamic(() => import('../../components/homepage/homepage-link-unit'));
const HomepageTrust = dynamic(() => import('../common/common-trust'));
const HomepageExtendedInfo = dynamic(
  () => import('../../components/homepage/homepage-extended-info')
);

const Profile = () => {
  // const [stars, setStars] = useState(0);
  const profileRef = useRef(null);

  useEffect(() => {
    profileRef.current = document.getElementById('profile');
  }, []);

  return (
    <>
      <HomePageBox id="profile" ref={profileRef}>
        <WaterMarkImage className="homepage-watermark-img" />
        <MainNavigation
          title={navigationData.line1}
          byline={navigationData.line2}
          navigationData={navigationData.links}
          noOfColumns={3}
          fromPage="homePage"
        />
        <HomepageFeatured
          title={featuredData.title}
          featuredData={featuredData.units}
          carouselProps={{
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1
              },
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              480: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              640: {
                slidesPerView: 3.5,
                slidesPerGroup: 3.5
              },
              850: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 0
              },
              992: {
                slidesPerView: featuredData.units.length,
                spaceBetween: 42
              }
            }
          }}
        />
        <HomepageTrust trustData={trustData} />
        <HomepageLinkUnit linksData={linksData} />
        <HomepageExtendedInfo extendedData={extendedData} />
      </HomePageBox>
      <Footer footerData={footerData} />
    </>
  );
};

const HomePageBox = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 127px;

  @media (max-width: 992px) {
    padding-top: 67px;
  }

  .homepage-watermark-img {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
  }

  @media (max-width: 480px) {
    .homepage-watermark-img {
      width: 50%;
    }
  }

  &::after {
    content: '';
    background-image: url('');
  }

  img {
    background-size: contain !important;
    background-repeat: no-repeat !important;
    filter: blur(0px) !important;
    @media (max-width: 960px) {
      background-position: 50% 50%;
    }
  }
`;

export default Profile;
