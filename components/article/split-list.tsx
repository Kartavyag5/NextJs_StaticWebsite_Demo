import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  title: string;
  position?: string;
  children: any;
  storybook?: boolean;
};

const SplitList: FC<Props> = ({ title, position, children, storybook }) => {
  return (
    <SplitListBox boxpos={position}>
      <Text as="span" className="split-list-title">
        {title}
      </Text>
      <Box className="split-list-desc">
        {storybook ? <ReactMarkdown>{children}</ReactMarkdown> : children}
      </Box>
    </SplitListBox>
  );
};

const SplitListBox = styled(Box)`
  display: flex;
  justify-content: center;
  min-height: 86px;
  font-size: 18px;
  margin: 0px 20px;
  .split-list-title {
    width: 170px;
    border-right: 1px solid #d5d7db;
    border-bottom: ${(props) => (props.boxpos === 'bottom' ? 'none' : '1px solid #d5d7db')};
    color: #16a0b7;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .split-list-desc {
    flex: 1;
    border-bottom: ${(props) => (props.boxpos === 'bottom' ? 'none' : '1px solid #d5d7db')};
    @media (max-width: 800px) {
      margin-bottom: ${(props) => (props.boxpos === 'top' ? '0px' : '10px')};
      padding-bottom: 10px;
    }
    p {
      margin: 0;
      padding: 0;
      margin-left: 15px !important;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .split-list-title {
      border: 0px;
      width: 100%;
      padding-bottom: 0px;
    }
    .split-list-desc {
      border-bottom: 1px solid #d5d7db;
      p{
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export default SplitList;
