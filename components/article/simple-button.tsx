import { Box, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

const SimpleButton = ({ title, link, bgColor, hoverbgcolor }) => {
  return (
    <SimpleButtonBox bgdcolor={bgColor} hoverbgcolor={hoverbgcolor}>
      <Button>
        <Link href={link}>{title}</Link>
      </Button>
    </SimpleButtonBox>
  );
};

const SimpleButtonBox = styled(Box)`
  margin: 15px;
  padding-top: 10px;
  text-align: center;
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
`;

export default SimpleButton;
