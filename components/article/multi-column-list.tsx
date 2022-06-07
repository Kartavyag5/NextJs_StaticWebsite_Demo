import { Box, ListItem, ListIcon, List, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { BulletIcon } from '../../assets/js/bulletIcon';

type Props = {
  heading: string;
  numColumns: number;
  data: string[];
};

const MultiColumnList: FC<Props> = ({ heading, numColumns, data }) => {
  return (
    <MultiColumnListBox numofcolumns={numColumns} heading={heading}>
      {heading && 
      <Text as="h2" className="multi-column-heading">
        {heading}
      </Text>
      }
      <Box className="multi-column-lists-container">
        <List className="multi-column-lists">
          {data.map((listItem, index) => (
            <ListItem className="multi-column-list-item" key={index}>
              <Box>
                <ListIcon as={BulletIcon} />
              </Box>
              <Text as="span" pl={2}>
                {listItem}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </MultiColumnListBox>
  );
};

const MultiColumnListBox = styled(Box)`
  margin: 0px 10px;
  border: ${(props) => props?.heading && '1px solid #e0e0e0'};
  box-shadow: ${(props) =>
    props?.heading &&
    ' 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1)'};
  border-radius: 4px;
  font-family: proxima-nova;
  overflow: hidden;
  .multi-column-heading {
    padding: 15px;
    background: #f2f2f2;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;
  }
  .multi-column-lists-container {
    padding: 15px;
    .multi-column-lists {
      display: flex;
      flex-wrap: wrap;
      .multi-column-list-item {
        font-size: 18px;
        display: flex;
        align-items: flex-start;

        @media screen and (min-width: 0px) {
          width: 100%;
        }
        @media screen and (min-width: 400px) {
          width: ${(props) => {
            if (props.numofcolumns === 1) {
              return `100%`;
            } else {
              return `50%`;
            }
          }};
        }
        @media screen and (min-width: 767px) and (max-width: 1199px) {
          width: ${(props) => {
            if (props.numofcolumns === 1) {
              return `100%`;
            } else if (props.numofcolumns === 2) {
              return `50%`;
            } else {
              return `33.33%`;
            }
          }};
        }
        @media screen and (min-width: 1199px) {
          width: ${(props) => {
            if (props.numofcolumns === 1) {
              return `100%`;
            } else if (props.numofcolumns === 2) {
              return `50%`;
            } else if (props.numofcolumns === 3) {
              return `33.33%`;
            } else {
              return `25%`;
            }
          }};
        }
      }
    }
  }
`;

export default MultiColumnList;
