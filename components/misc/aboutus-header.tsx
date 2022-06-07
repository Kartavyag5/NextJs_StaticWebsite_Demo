import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
// import Image from 'next/dist/client/image';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import aboutHeaderImage from '../../assets/aboutHeader.png';
import remarkGfm from 'remark-gfm';


type Props = {
  children: any;
  storybook?: boolean | undefined;
};

const AboutHeader: FC<Props> = ({ children, storybook }) => {
  const [textboxheight, settextboxheight] = useState(0);
  
  const renderImage = (image) => {
    const props: any = image;
    return (
      <Image
        className="about-header-image"
        alt="aboutHeader_image"
        src={props.src ? `${props?.src}` : aboutHeaderImage}
        layout="fill"
      />
    );
  };

  useEffect(() => {
    window.addEventListener('load', gettextboxheight);
    window.addEventListener('resize', gettextboxheight);
    return () => {
      window.removeEventListener('load', gettextboxheight);
      window.removeEventListener('resize', gettextboxheight);
    };
  }, []);

  const gettextboxheight = () => {
    const textBoxElement = document.getElementsByClassName('about-header-text-box');
    settextboxheight(textBoxElement[0]?.offsetHeight);
  };  

  return (
    <AboutHeaderBox textboxheight={textboxheight}>
      <Box className="about-header-image-box">{renderImage(aboutHeaderImage)}</Box>
      <Box className="about-header-text-box">
        {children}
      </Box>
    </AboutHeaderBox>
  );
};

const AboutHeaderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props?.textboxheight - 60}px;
  width: auto;
  /* max-height: 600px; */
  height: auto;
  font-family: proxima-nova;
  font-size: 22px;
  align-items: center;
  position: relative;

  @media (max-width: 950px) {
    /* height: 356px; */
    margin-bottom: 0px;
  }

  .about-header-image-box {
    /* height:600px; */
    /* width:100%; */
    .about-header-image {
      /* object-fit: cover; */
      /* height:100%; */
      @media (max-width: 950px) {
        /* height:auto; */
        /* object-fit: cover; */
      }
    }
  }
  .about-header-text-box {
    display: flex;
    width: 1127px;
    /* height: 597px; */
    flex-direction: column;
    /* box-shadow:0px 0px 0px lightgray; */
    border: 1px solid lightgrey;
    position: absolute;
    z-index: 10;
    background-color: white;
    top: 75.7%;
    padding: 64px 96px 32px 96px;

    @media (max-width: 950px) {
      display: flex;
      top: 100%;
      height: auto;
      width: auto;
      padding: 32px 17px 20px 23px;
      position: relative;
      z-index: 0;
    }
  }
`;

export default AboutHeader;
