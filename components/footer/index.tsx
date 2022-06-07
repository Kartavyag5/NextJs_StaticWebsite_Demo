import { Box, Link, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { LogoMain } from 'assets/js/logoMain';
import React, { FC } from 'react';
// import Image from 'next/image';
import WCAG from '../../assets/wcag.png';
import Image from 'next/image';

type Props = {
  footerData: FooterData;
};

type FooterData = {
  byline: string;
  copyright: string;
  link_lists: FooterLinksBlock[];
};

type FooterLinksBlock = {
  title: string;
  links: FooterLinkDetails[];
};

type FooterLinkDetails = {
  link: string;
  url: string;
};

const Footer: FC<Props> = ({ footerData }) => {
  const footerBlock = (linkDetails, index) => (
    <Flex
      key={index}
      flexDirection={'column'}
      minWidth={{ xs: 'fit-content', md: 'auto' }}
      mb={{ xs: '40px', md: '0px' }}
      // px={{ xs: '15px', md: '0px' }}
      className="footer-link-block">
      <Text as="span" className="link-title" fontSize={{ xs: '22px', md: '16px' }}>
        {linkDetails?.title}
      </Text>
      {linkDetails?.links?.map((links, index) => (
        <Link tabIndex={0} as="a" key={index} className="link-urls" href={links?.url} mb={1}>
          {links?.link}
        </Link>
        // <></>
      ))}
    </Flex>
  );

  const renderImage = (image) => {
    const props: any = image;
    return <Image alt="wcag_image" src={`/${props?.src}`} width={163} height={54} />;
  };

  return (
    <FooterBox id="footer">
      <Box className="footer-links">
        <Flex
          className="footer-links-container"
          maxW={'980px'}
          p={{ xs: '45px 30px', lg: '0px' }}
          w={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexWrap={'wrap'}
          flexDirection={{ xs: 'column', md: 'row' }}>
          <Flex className="footer-link-half">
            {footerData?.link_lists?.map(
              (linkDetails, index) =>
                (index === 0 || index === 1) && footerBlock(linkDetails, index)
            )}
          </Flex>
          <Flex className="footer-link-half">
            {footerData?.link_lists?.map(
              (linkDetails, index) =>
                (index === 2 || index === 3) && footerBlock(linkDetails, index)
            )}
          </Flex>
        </Flex>
      </Box>
      <Box className="footer-details">
        <Box
          className="footer-details-container"
          flexDirection={{ xs: 'column', lg: 'row' }}
          p={{ xs: '50px 30px', lg: '0px 0px' }}
          justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
          alignItems={{ xs: 'flex-start', lg: 'center' }}>
          <Box mb={{ xs: '25px', lg: '0px' }}>
            <Link href="/">
              <LogoMain redcolor="#7f8085" blackcolor="#7f8085" width="180px" height="35px" />
            </Link>
          </Box>
          <Box mb={{ xs: '25px', lg: '0px' }} fontSize={'14px'} color={'#606266'}>
            <Text mb={{ xs: '10px', lg: '0px' }}>{footerData?.copyright}</Text>
            <Text marginTop={'0px'}>{footerData?.byline}</Text>
          </Box>
          <Link href="https://semdynamics.com/wcag-compliance/innerbody-research" isExternal>
          {renderImage(WCAG)}
          </Link>
        </Box>
      </Box>
    </FooterBox>
  );
};
const FooterBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: proxima-nova;

  @media (max-width: 980px) {
    .footer-details-container {
      padding: 35px !important;
    }
  }
  @media (max-width: 768px) {
    .footer-link-half {
      width: 70% !important;
      justify-content: space-between !important;
      .footer-link-block {
        width: fit-content !important;
      }
    }
  }
  @media (max-width: 540px) {
    .footer-details-container {
      padding: 35px;
    }
    .footer-link-block {
      margin-bottom: 40px;
    }
  }
  @media (max-width: 500px) {
    .footer-link-half {
      width: 90% !important;
      justify-content: space-between !important;
      .footer-link-block {
        width: fit-content !important;
      }
    }
  }
  @media (max-width: 400px) {
    .footer-link-half {
      width: 100% !important;
      justify-content: space-between !important;
      .footer-link-block {
        width: fit-content !important;
      }
    }
  }
  @media (max-width: 315px) {
    .footer-links-container {
      justify-content: space-around;
    }
  }

  .footer-links {
    min-height: 228px;
    background: #def6fc;
    display: flex;
    justify-content: center;
    .footer-links-container {
      .footer-link-half {
        width: 50%;
        .footer-link-block {
          width: 50%;
        }
      }
      .link-title {
        font-size: 22px;
        color: #323c47;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .link-urls {
        font-size: 16px;
        color: #606266;
      }
    }
  }
  .footer-details {
    min-height: 137px;
    display: flex;
    justify-content: center;
    .footer-details-container {
      width: 100%;
      max-width: 980px;
      display: flex;
    }
  }
`;
export default Footer;
