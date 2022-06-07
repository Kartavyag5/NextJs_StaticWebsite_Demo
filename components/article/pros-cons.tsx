import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import { List, ListItem, ListIcon, Box, Text } from '@chakra-ui/react';
import { RightIcon } from '../../assets/js/rightIcon';
import { WrongIcon } from '../../assets/js/wrongIcon';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

type Props = {
  pros: string[];
  cons: string[];
};

const ProsCons: FC<Props> = ({ pros, cons }) => {
  return (
    <ProsConsBox>
      <Box className="pros-box">
        <Text as="h2" className="pros-header header">
          Pros
        </Text>
        <List spacing={3} className="pros-list list">
          {pros?.map((pros, index) => (
            <ListItem key={index} className="list-item">
              <ListIcon as={RightIcon} />
              <Text as="span" pl={'10px'} className="pros-item">
                <ReactMarkdown>{pros}</ReactMarkdown>
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className="cons-box">
        <Text as="h2" className="cons-header header">
          Cons
        </Text>
        <List className="cons-list list" spacing={3}>
          {cons?.map((cons, index) => (
            <ListItem key={index} className="list-item">
              <ListIcon as={WrongIcon} />
              <Text as="span" pl={'10px'} className="cons-item">
                <ReactMarkdown>{cons}</ReactMarkdown>
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </ProsConsBox>
  );
};

const ProsConsBox = styled(Box)`
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
  border-radius: 4px;
  margin: 20px 10px;
  font-family: proxima-nova;
  display: flex;
  .header {
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
    text-align: center;
  }
  .list {
    padding: 20px 10px;
    .list-item {
      line-height: 1.2;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 15px;
      font-weight: 500;
      .chakra-icon {
        width: auto;
        height: auto;
      }
    }
  }
  .pros-box {
    width: 50%;
    border-right: 2px dotted #ecf0f1;
    .pros-header {
      border-bottom: 2px solid #bbe268;
    }
    .pros-list {
      .pros-item {
        p {
          margin: 0px;
          padding: 0px;
        }
      }
    }
  }
  .cons-box {
    width: 50%;
    .cons-header {
      border-bottom: 2px solid #d14347;
    }
    .cons-list {
      .cons-item {
        p {
          margin: 0px;
          padding: 0px;
        }
      }
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    .pros-box {
      width: 100%;
      border-bottom: 2px dotted #ecf0f1;
      border-right: 0px;
    }
    .cons-box {
      width: 100%;
    }
  }
  @media (max-width: 470px) {
    .list {
      padding: 20px 10px;
    }
  }
`;
export default ProsCons;
