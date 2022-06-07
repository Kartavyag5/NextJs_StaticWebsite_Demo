import { Box, Button, CloseButton, Heading, IconButton, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC, useRef, useState, useEffect } from 'react';
import Imgix from 'react-imgix';
import ReactMarkdown from 'react-markdown';

type Props = {
  children: string;
  buttonText: string;
  storybook?: boolean;
  link: string;
};

const CallToAction: FC<Props> = ({ storybook, children, buttonText, link }) => {
  const callToActionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [boxPos, setBoxPos] = useState(0);
  useEffect(() => {
    setBoxPos(callToActionRef?.current?.offsetTop);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPos);
    return () => {
      window.removeEventListener('scroll', checkScrollPos);
    };
  }, [boxPos]);

  const checkScrollPos = () => {
    setScrollPos(window.scrollY);
    const condition = window.scrollY > boxPos - window.innerHeight;
    setShow(condition);
  };

  return (
    <CallToActionBox storybook={storybook} ref={callToActionRef} show={show.toString()}>
      <Box className="call-to-action-container">
        <ReactMarkdown className="call-to-action-text">{children}</ReactMarkdown>
        <Box className="call-to-action-button-container">
          <Button className="call-to-action-button">
            <Link href={link} h={'fit-content'} tabIndex={-1}>
              {buttonText}
            </Link>
          </Button>
        </Box>
      </Box>
    </CallToActionBox>
  );
};

const CallToActionBox = styled(Box)`
  display: none;
  font-family: proxima-nova;
  font-size: 16px;
  z-index: 97;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background: white;
    border-top: 2px solid #d5d7db;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.089);
    position: ${(props) =>
      props.storybook ? 'relative' : props.show == 'true' ? 'fixed' : 'relative'};
    bottom: ${(props) => (props.storybook ? 0 : props.show == 'true' && 0)};
    opacity: ${(props) => (props.storybook ? 1 : props.show == 'true' ? 1 : 0)};
    height: ${(props) => (props.storybook ? 'auto' : props.show == 'true' ? 'auto' : '0px')};
    padding: ${(props) => (props.storybook ? '10px' : props.show == 'true' ? '10px' : 0)};
    .call-to-action-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .call-to-action-text {
        p {
          padding: 0px;
          margin: 0px;
          padding-right: 5px;
        }
      }
      .call-to-action-button-container {
        margin: 10px;
        .call-to-action-button {
          background-color: #e54253;
          .chakra-link {
            color: white !important;
            text-decoration: none !important;
          }
        }
      }
    }
  }
`;

export default CallToAction;
