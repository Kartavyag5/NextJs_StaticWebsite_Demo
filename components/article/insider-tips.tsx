import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import BulbPhoto from '../../assets/bulb.svg';
import Image from 'next/image';

type Props = {
  children: any;
  markdown?: string | number;
  child: any;
};

const InsideTips: FC<Props> = ({ children, markdown }) => {
  return (
    <ArticleInsiderTips className="article_insider_tips">
      <Box className="article-insider-tip-image">
        <Image alt="bulb" src={BulbPhoto} width={75} height={75}></Image>
      </Box>
      <Text as="span" className="article-insider-tip-data">
        {children}
      </Text>
    </ArticleInsiderTips>
  );
};

const ArticleInsiderTips = styled(Box)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: proxima-nova;
  background-color: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0px;
  width: '50%';
  margin: 0px 10px;

  .article-insider-tip-image {
    min-width: fit-content;
  }
  .article-insider-tip-data {
    margin-left: 30px;
    text-align: left;
    line-height: 1.2;
    word-wrap: break-word;
    p {
      margin: 0;
      padding: 0;
      margin-top: 20px;
      &:first-of-type {
        margin: 0px;
      }
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;
    margin: 0px 10px;
    .article-insider-tip-data {
      text-align: center;
      margin: 20px 10px;
    }
  }
`;

export default InsideTips;
