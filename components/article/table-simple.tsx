import React, { FC, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Box } from '@chakra-ui/react';
import { RightIcon } from '../../assets/js/rightIcon';
import styled from '@emotion/styled';
import ReactMarkdown, { uriTransformer } from 'react-markdown';
import gfm from 'remark-gfm';
import markdown from 'markdown';
// // import { parseMarkdown } from "markdown-model";
// import MarkdownView from 'react-showdown';
// import { compiler } from 'markdown-to-jsx';

type Props = {
  children: any;
  storybook: boolean;
  child?: any;
};

const TableSimple: FC<Props> = ({ children, storybook, child }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!storybook) {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  const data = React.useMemo(() => {
    const mainChild = storybook ? child : children;

    return mainChild?.props?.children?.[1]?.props?.children?.map((data) => {
      const allData = data?.props?.children?.map((dataa) => {
        if (storybook) {
          if (dataa?.props?.children?.length > 0) {
            return dataa?.props?.children?.[0];
          } else {
            return '';
          }
        } else {
          if (dataa?.props?.children) {
            return dataa?.props?.children;
          } else {
            return '';
          }
        }
      });
      return Object.assign({}, allData);
    });
  }, [children, child]);

  const columns = React.useMemo(() => {
    const mainChild = storybook ? child : children;
    return mainChild?.props?.children?.[0]?.props?.children?.props?.children?.map(
      (headings, index) =>
        storybook
          ? headings?.props?.children?.length > 0
            ? {
                Header: headings?.props?.children?.[0]?.props?.children?.[0],
                accessor: index.toString()
              }
            : {
                Header: undefined,
                accessor: index.toString()
              }
          : headings?.props?.children
          ? {
              Header: headings?.props?.children?.props?.children,
              accessor: index.toString()
            }
          : {
              Header: undefined,
              accessor: index.toString()
            }
    );
  }, [children, child]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <Box>
      <TableBox>
        <Table
          size={windowWidth < 500 ? 'sm' : 'md'}
          className="table-simple"
          {...getTableProps()}
          colorScheme={'blackAlpha'}>
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, cIndex) => (
                  <Th
                    key={cIndex}
                    isNumeric={column.isNumeric}
                    borderLeft={
                      cIndex === 0 || cIndex === headerGroup.headers.length - 1
                        ? 'none'
                        : '1px solid #d5d7db;'
                    }
                    borderRight={
                      cIndex === 0 || cIndex === headerGroup.headers.length - 1
                        ? 'none'
                        : '1px solid #d5d7db;'
                    }>
                    {column.Header}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <Tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, cIndex) =>
                    cIndex > 0 ? ( typeof cell?.render('Cell')?.props?.cell?.value === "string" &&
                      cell?.render('Cell')?.props?.cell?.value?.includes('right') ? (
                        <Td
                          borderLeft={
                            cIndex === 0 || cIndex === row.cells.length - 1
                              ? 'none'
                              : '1px solid #d5d7db;'
                          }
                          borderRight={
                            cIndex === 0 || cIndex === row.cells.length - 1
                              ? 'none'
                              : '1px solid #d5d7db;'
                          }
                          key={cIndex}
                          {...cell.getCellProps()}
                          isNumeric={cell.column.isNumeric}>
                          <RightIcon minW={'23px'} maxW={'23px'} m={'0 auto'} />
                        </Td>
                      ) : (
                        <Td
                          borderLeft={
                            cIndex === 0 || cIndex === row.cells.length - 1
                              ? 'none'
                              : '1px solid #d5d7db;'
                          }
                          borderRight={
                            cIndex === 0 || cIndex === row.cells.length - 1
                              ? 'none'
                              : '1px solid #d5d7db;'
                          }
                          key={cIndex}
                          {...cell.getCellProps()}
                          isNumeric={cell.column.isNumeric}>
                          {cell?.render('Cell')?.props?.cell?.value}
                        </Td>
                      )
                    ) : (
                      <Td
                        minW={{ lg: '100px', xs: '70px' }}
                        textAlign={'left !important'}
                        key={cIndex}
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}>
                        {cell.render('Cell')}
                      </Td>
                    )
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableBox>
    </Box>
  );
};

const TableBox = styled(Box)`
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
  border-radius: 4px;
  overflow: hidden;
  font-family: proxima-nova !important;
  /* position: relative; */
  table {
    thead {
      background: #f8f9fa;
    }
    tbody {
      tr {
        border-top: 1px solid #d5d7db;
        /* background: #f8f9fa; */

        &:nth-of-type(even) {
          background: #f8f9fa !important;
        }
        /* th {
          &:first-child {
            position: absolute;
          }
        } */
      }
    }
    th,
    td {
      font-size: 16px;
      text-align: center;
      padding: 15px;
      width: min-content;
    }
    th {
      font-family: 'proxima-nova';
      text-transform: capitalize;
      color: black;
    }
  }

  @media (max-width: 575px) {
    margin: 10px 0px;
    border-radius: 0px;
    border-left: 0px;
    border-right: 0px;
    font-size: 12px !important;
    th,
    td {
      font-size: 12px !important;
      min-width: 60px;
      padding: 5px !important;
      width: min-content;
    }
  }
`;

export default TableSimple;
