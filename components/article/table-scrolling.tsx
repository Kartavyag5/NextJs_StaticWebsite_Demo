import React, { useEffect, useState } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { useSticky } from 'react-table-sticky';
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, chakra, Box } from '@chakra-ui/react';
import { RightIcon } from '../../assets/js/rightIcon';
import styled from '@emotion/styled';

const TableScrolling = ({ children, child, storybook }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 150,
      width: 150,
      maxWidth: 400
    }),
    []
  );

  const data = React.useMemo(() => {
    const mainChild = storybook ? child : children;
    return mainChild?.props?.children?.[1]?.props?.children?.map((data) => {
      const allData = data?.props?.children?.map((dataa, i) => {
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
  }, []);

  const columns = React.useMemo(() => {
    const mainChild = storybook ? child : children;

    return mainChild?.props?.children?.[0]?.props?.children?.props?.children?.map(
      (headings, index) =>
        storybook
          ? headings?.props?.children?.length > 0
            ? {
                Header: headings?.props?.children?.[0]?.props?.children?.[0],
                accessor: index.toString(),
                sticky: index === 0 && 'left'
              }
            : {
                Header: undefined,
                accessor: index.toString(),
                sticky: index === 0 && 'left'
              }
          : headings?.props?.children
          ? {
              Header: headings?.props?.children?.props?.children,
              accessor: index.toString(),
              sticky: index === 0 && 'left'
            }
          : {
              Header: undefined,
              accessor: index.toString(),
              sticky: index === 0 && 'left'
            }
    );
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useBlockLayout,
    useSticky
  );

  return (
    <TableBox>
      <Box {...getTableProps()} className="table sticky">
        <div className="header">
          {headerGroups.map((headerGroup, index) => (
            <div key={index} {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column, cIndex) => (
                <div key={cIndex} {...column.getHeaderProps()} className="th">
                  {column?.Header}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()} className="body">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div key={i} {...row.getRowProps()} className="tr">
                {row.cells.map((cell, cIndex) => {
                  return (
                    <div key={cIndex} {...cell.getCellProps()} className="td">
                      { (typeof cell?.render('Cell')?.props?.value === "string") && cell?.render('Cell')?.props?.value?.includes('right') ? (
                        <RightIcon minW={'20px'} maxW={'20px'} lineHeight={0} />
                      ) : (
                        cell?.render('Cell')
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Box>
    </TableBox>
  );
};

const TableBox = styled(Box)`
  margin: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: proxima-nova;
  font-size: 16px;
  .table {
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
    border-radius: 4px;
    width: auto;
    height: auto;
    ::-webkit-scrollbar {
      height: 5px;
      border: 1px solid #fff;
      border: none;
    }
    ::-webkit-scrollbar-track {
      border: none;
      margin: 10px;
      width: 90%;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border: none;
      cursor: pointer;
      border-radius: 10px;
      background: #b0b0b0;
    }
    .tr {
      width: fit-content !important;
      .th {
        @media (max-width: 575px) {
          min-width: 100px;
          max-width: 100px;
        }
        min-width: 150px;
        max-width: 150px;
        width: 100% !important;
        &:first-of-type {
          min-width: 150px;
          max-width: 150px;
          @media (max-width: 575px) {
            min-width: 100px;
            max-width: 100px;
          }
          width: 100% !important;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .td {
        @media (max-width: 575px) {
          min-width: 100px;
          max-width: 100px;
        }
        min-width: 150px;
        max-width: 150px;
        width: 100% !important;
        &:first-of-type {
          @media (max-width: 575px) {
            min-width: 100px;
            max-width: 100px;
          }
          min-width: 150px;
          max-width: 150px;
          width: 100% !important;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
    .th,
    .td {
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      display: flex !important;
      justify-content: center;
      align-items: center;
      padding: 15px;
      :last-child {
        border-right: 0;
      }
      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        &.isResizing {
          background: red;
        }
      }
    }
    &.sticky {
      overflow-x: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
      .header {
        top: 0;
        box-shadow: 0px 3px 3px #eeeeee;
        div {
          div {
            background: #f8f9fa;
            font-weight: bold;
            text-align: center;
            padding: 15px;
          }
        }
      }
      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #eeeeee;
      }
      .body {
        position: relative;
        z-index: 0;
        > div {
          &:nth-of-type(even) {
            div {
              background: #f8f9fa;
            }
          }
        }
      }
      [data-sticky-td] {
        position: sticky;
      }
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #eeeeee;
      }
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #eeeeee;
      }
    }
  }
  @media (max-width: 575px) {
    margin: 10px 0px;
    .table {
      font-size: 12px;
      border-radius: 0px;
      border-left: 0px;
      border-right: 0px;
      .tr {
        .th {
          padding: 15px;
          &:first-of-type {
            padding: 5px;
          }
        }
        .td {
          padding: 15px;
          &:first-of-type {
            padding: 5px;
          }
        }
      }
    }
  }
`;

export default TableScrolling;
