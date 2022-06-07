import { Box, Button, Icon, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import Image from 'next/image';
import CalloutImage from '../../assets/callout.jpg';
import Imgix from 'react-imgix';
import { BulletIcon } from '../../assets/js/bulletIcon';
import ReactMarkdown from 'react-markdown';

type Props = {
  title: string;
  description: string;
  points: string[];
  websitelink: string;
  image: string;
  imageAlt: string;
  buttonColor?: string;
  hoverbgcolor?: string;
  saleline?: string;
  children: any;
  storybook?: boolean;
  leftCornerTitle: string;
  btnText?: string;
};

const Callout: FC<Props> = ({
  title,
  websitelink,
  image,
  imageAlt,
  buttonColor,
  hoverbgcolor,
  saleline,
  children,
  storybook,
  leftCornerTitle,
  btnText
}) => {
  return (
    <CalloutBox
      bgdcolor={buttonColor}
      hoverbgcolor={hoverbgcolor}
      leftcornertitle={leftCornerTitle}>
      <Box className="callout-corner-title">
        {leftCornerTitle ? leftCornerTitle : 'Our Top Picks'}
      </Box>
      <Box className="callout-image">
        <Imgix src={image} sizes="100vw" alt={imageAlt} />
      </Box>
      <Box className="callout-details">
        <Box className="callout-details-title">{title}</Box>
        <Box className="callout-details-description">
          {storybook ? <ReactMarkdown>{children}</ReactMarkdown> : children}
        </Box>
        <Box className="callout-details-button-container">
          <Button className="callout-details-button">
            <Link href={websitelink} h={'fit-content'} tabIndex={-1}>
              {btnText ?? 'Visit Website'}
            </Link>
          </Button>
        </Box>
        <Box className="callout-details-salesline">{saleline}</Box>
      </Box>
    </CalloutBox>
  );
};

const CalloutBox = styled(Box)`
  /* width: 100%; */
  position: relative;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 30px 10px;
  padding-bottom: 10px !important;
  font-family: proxima-nova;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #404145;

  /* button {
    color: white;
    background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
    &::before {
      background-color: ${(props) =>
    props?.hoverbgcolor ? props?.hoverbgcolor : 'rgba(0, 0, 0, 0.3);'} !important;
    }
    &:hover {
      background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
    }
  } */

  button {
    overflow: hidden;
    position: relative;
    transition: 200ms;
    color: white;
    background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
    a {
      z-index: 1;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      color: rgba(0, 0, 0, 0.5);
      background-color: ${(props) =>
        props?.hoverbgcolor ? props?.hoverbgcolor : 'rgba(0, 0, 0, 0.3);'} !important;
      transition: 400ms;
    }
    &:hover {
      background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
      &::before {
        width: 100%;
        pointer-events: none;
        background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
      }
    }
    &:hover,
    &:active,
    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
  }

  .callout-corner-title {
    height: fit-content;
    width: fit-content;
    padding: 5px 10px;
    background: #16a0b7;
    position: absolute;
    top: -17px;
    left: 19px;
    color: white;
    font-size: 15px;
    border-radius: 7px;
    text-transform: capitalize;
  }

  .callout-image {
    width: 30%;
    height: 100%;
    @media (max-width: 770px) {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    div {
      width: 100%;
      height: auto;
      div {
        width: 100%;
        height: auto;
      }
      img {
        object-fit: fill;
      }
    }
  }
  .callout-details {
    width: 70%;
    @media (max-width: 770px) {
      width: 100%;
    }
    padding: 0px 0px 0px 20px;
    .callout-details-title {
      font-size: 24px;
      @media (min-width: 770px) {
        margin-top: 10px;
      }
      
      font-weight: bolder;
      text-decoration: underline;
      margin-bottom: 10px;
    }
    .callout-details-description {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 10px;
      p {
        margin: 0;
        margin-top: 13px;
        margin-bottom: 13px;
        padding: 0;
      }
      ul {
        padding-left: 23px;
        margin: 10px 0px;
        position: relative;
        li {
          position: relative;
          &::marker {
            opacity: 0;
            color: transparent;
            display: none;
          }
          &::before {
            content: '•';
            color: #16a0b7;
            width: 4px;
            height: 4px;
            line-height: 0;
            font-size: 36px;
            position: absolute;
            top: 11px;
            left: -25px;
          }
        }
      }
    }
    .callout-details-salesline {
      margin-bottom: 10px;
      margin-top: 10px;
      font-weight: 600;
      color: green;
    }
    .callout-details-list {
      font-size: 17px;
      margin-bottom: 15px;
      .callout-details-listitem {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
    /* .callout-details-button {
      background-color: ${(props) => (props?.buttonColor ? props?.buttonColor : '#e54253')};
      color: white;
    } */
  }

  .callout-details-button-container {
    padding-top: 10px;
    padding-bottom: 12px;
    .chakra-button {
      .chakra-link {
        text-transform: capitalize;
        color: white !important;
        text-decoration: none !important;
      }
    }
  }

  @media (max-width: 770px) {
    flex-direction: column;
    margin: 30px 0px;
    border-radius: 0px;
    border: 0px;
    border-top: 2px solid #eaebed;
    border-bottom: 2px solid #eaebed;
    .callout-details {
      padding: 0px;
    }
    .callout-details-button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      .chakra-button {
        .chakra-link {
          color: white !important;
          text-decoration: none;
        }
      }
    }
  }
`;

export default Callout;
