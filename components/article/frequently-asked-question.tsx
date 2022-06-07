import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

type Props = {
  title: string;
  children: any;
  storybook: boolean;
};

const FrequentlyAskedQuestion: FC<Props> = ({ title, children, storybook }) => {
  return (
    <FAQBox storybook={storybook} className="faq-main">
      <Accordion allowToggle>
        <AccordionItem>
          <Heading>
            <AccordionButton tabIndex={-1}>
              <Box className="faq-button" tabIndex={0}>
                <Box flex="1" textAlign="left" className="faq-title">
                  {title}
                </Box>
                <AccordionIcon color={'#e54253'} />
              </Box>
            </AccordionButton>
          </Heading>
          <AccordionPanel>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FAQBox>
  );
};

const FAQBox = styled(Box)`
  font-family: proxima-nova;
  margin: 0 10px;
  min-height: 40px;

  ul {
    padding-left: ${(props) => props.storybook && '40px'};
    margin: ${(props) => props.storybook && '10px 0'};

    li::marker {
      margin-left: ${(props) => props.storybook && '10px'};
      color: ${(props) => props.storybook && '#16a0b7'};
      width: ${(props) => props.storybook && '8px'};
      height: ${(props) => props.storybook && '8px'};
      font-size: ${(props) => props.storybook && '30px'};
    }
  }
  ol {
    margin: ${(props) => props.storybook && ' 10px 0px'};
    padding-left: ${(props) => props.storybook && ' 35px'};
    li {
      line-height: ${(props) => props.storybook && '2'};
      padding-left: ${(props) => props.storybook && '5px'};
    }
  }

  .chakra-accordion__item {
    border-top-width: 0px;
    border-bottom-width: 2px;
    .chakra-accordion__button{
      padding:0px;
      .faq-button{
        width:100%;
        display: flex;
        justify-content: space-around;
        padding:10px 15px;
        .faq-title {
          font-size: 18px;
          font-weight: bold;
    
          @media (max-width: 800px) {
            font-size: 16px;
          }
        }
      }
    }

    button {
      &:focus {
        box-shadow: none;
      }
    }
    .chakra-collapse{
      .chakra-accordion__panel {
        padding: 0px;
        font-size: 16px;
        > ul {
          padding-left: 40px;
          margin: 10px 0px;
  
          li::marker {
            margin-left: 10px;
            color: #16a0b7;
            width: 8px;
            height: 8px;
            font-size: 30px;
          }
        }
        > ol {
          margin: 10px 0px;
          padding-left: 35px;
          li {
            line-height: 2;
            padding-left: 5px;
          }
        }
      }
    }
  }
`;

export default FrequentlyAskedQuestion;
