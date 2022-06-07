import { Box, Button, CloseButton, Heading, IconButton, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC, useRef, useState, useEffect } from 'react';
import Imgix from 'react-imgix';

type Props = {
  line1: string;
  line2: string;
  image: string;
  buttonText: string;
  storybook?: boolean;
  link: string;
  imageAlt: string;
};

const CallToActionLarge: FC<Props> = ({ storybook, line1, line2, image, buttonText, link, imageAlt }) => {
  const callToActionLargeRef = useRef(null);
  const [show, setShow] = useState(false);
  const [repeatShow, setRepeatShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPos);
    return () => {
      window.removeEventListener('scroll', checkScrollPos);
    };
  }, []);

  const checkScrollPos = () => {
    setScrollPos(window.scrollY);
    const condition =
      window.scrollY > callToActionLargeRef?.current?.offsetTop - window.innerHeight &&
      window.scrollY < callToActionLargeRef?.current?.offsetTop - window.innerHeight + 190;
    if (condition) setShow(condition);
  };

  return (
    repeatShow && (
      <CallToActionLargeBox storybook={storybook} ref={callToActionLargeRef} show={show.toString()}>
        <CloseButton
          aria-label="close button"
          className="call-to-action-large-close-button"
          onClick={() => {
            setRepeatShow(false);
            setShow(false);
          }}
        />
        <Box className="call-to-action-large-details-container">
          <Box className="call-to-action-large-header">
            <Heading className="call-to-action-large-heading-1">{line1}</Heading>
            <Heading className="call-to-action-large-heading-2">{line2}</Heading>
          </Box>
          <Box className="call-to-action-large-container">
            <Box className="call-to-action-large-image-container">
              <Imgix src={image} alt={imageAlt} sizes="100vw" />
            </Box>
            <Box className="call-to-action-large-button-container">
              <Button className="call-to-action-large-button">
                <Link href={link} h={'fit-content'} tabIndex={-1}>
                  {buttonText}
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </CallToActionLargeBox>
    )
  );
};

const CallToActionLargeBox = styled(Box)`
  font-family: proxima-nova;
  z-index: 98;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px !important;
  background: white !important;
  border-top: 1px solid #d5d7db;
  box-shadow: 0px 0px 30px -10px #00000016,0px 0px 2px -1px #0000002f;
  position: ${(props) =>
    props.storybook ? 'relative' : props.show == 'true' ? 'fixed' : 'relative'};
  bottom: ${(props) => (props.storybook ? 0 : props.show == 'true' && 0)};
  left: ${(props) => (props.storybook ? 0 : props.show == 'true' && 0)};
  opacity: ${(props) => (props.storybook ? 1 : props.show == 'true' ? 1 : 0)};
  height: ${(props) => (props.storybook ? 'auto' : props.show == 'true' ? 'auto' : '0px')};
  padding: ${(props) => (props.storybook ? '10px' : props.show == 'true' ? '10px' : 0)};
  width: 100%;
  .call-to-action-large-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    background: none;
    &::before {
      background: transparent !important;
    }
    button {
      &:hover,
      &:focus,
      &:active {
        background: none;
        box-shadow: none;
      }
    }
  }

  .call-to-action-large-details-container {
    height: 120px;
    max-width: 980px;
    display: flex;
  }
  .call-to-action-large-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 10px 10px;
    .call-to-action-large-heading-1 {
      min-width: max-content;
      font-size: 30px;
      color: #404145;
    }
    .call-to-action-large-heading-2 {
      min-width: max-content;
      font-size: 20px;
      color: #7e8085;
    }
  }
  .call-to-action-large-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .call-to-action-large-image-container {
      height: min-content;
      flex: 1;
      margin-left:25px;
      margin-right:25px;
      img {
        max-height: 120px;
        height: auto;
      }
    }
    .call-to-action-large-button-container {
      /* flex: 1; */
      margin: 10px;
      .call-to-action-large-button {
        background-color: #e54253;
        color: white;
        font-size: 20px;
        .chakra-link  {
          color: white !important;
          text-decoration: none !important;
        }
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px !important;
    .call-to-action-large-details-container {
      height: auto;
      flex-direction: column;
      .call-to-action-large-image-container {
        height: auto;
        margin: 0px;
        img {
          max-height: none;
          height: auto;
        }
      }
    }
    .call-to-action-large-header {
      align-items: center;
      .call-to-action-large-heading-1 {
        font-size: 24px !important;
      }
      .call-to-action-large-heading-2 {
        font-size: 16px !important;
      }
    }
    .call-to-action-large-button {
      font-size: 16px !important;
    }
  }
`;

export default CallToActionLarge;
