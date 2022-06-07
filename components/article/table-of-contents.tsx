import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const TableOfContents = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [allHeadings, setAllHeadings] = useState<any>([]);
  const [scrollPos, setScrollPos] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [tocVisible, setTocVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(60);

  useEffect(() => {
    window.addEventListener('load', onPageLoad);
    window.addEventListener('scroll', () => {
      setNavbarHeight(document.getElementById('navbar')?.clientHeight);
      setTOCValue();
      setScrollPos(window.scrollY);
    });
    window.addEventListener('resize', () => setTOCValue());
    return () => {
      window.removeEventListener('resize', () => setTOCValue());
      window.removeEventListener('load', onPageLoad);
      window.removeEventListener('scroll', () => {
        setNavbarHeight(document.getElementById('navbar-searchbox').clientHeight);
        setTOCValue();
        setScrollPos(window.scrollY);
      });
    };
  }, []);

  const setTOCValue = () => {
    setTocVisible(
      window.scrollY >
        document.getElementById('table-of-contents')?.offsetHeight +
          document.getElementById('table-of-contents')?.offsetTop -
          60
    );
  };

  const onPageLoad = () => {
    const totalHeadings = document.querySelectorAll(`[data-name="article-heading"]`);
    const duplicateHeadings = allHeadings;
    for (let i = 0; i < totalHeadings.length; i++) {
      duplicateHeadings.push(totalHeadings[i]);
    }
    setAllHeadings([...duplicateHeadings]);
  };

  return (
    <>
      <TableContentBox
        open={open}
        scrollpos={scrollPos}
        condition={tocVisible.toString()}
        className="sticky-table-of-contents"
        id="sticky-table-of-contents">
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          mx={'auto'}
          minH={'45px'}
          onClick={() => setOpen(!open)}
          w={'100%'}
          textAlign={'center'}>
          <Text as="span">Table of Contents</Text>
          <Box className="table-of-contents-arrow-image">
            {open ? (
              <ChevronUpIcon color={'#e54253'} w={12} h={7} cursor={'pointer'} />
            ) : (
              <ChevronDownIcon color={'#e54253'} w={12} h={7} cursor={'pointer'} />
            )}
          </Box>
        </Box>
        <Flex flexDirection={'column'} className="table-of-contents-all-heading">
          {allHeadings.map((heading, index) => (
            <Box
              onClick={() => {
                if (index === 0) {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                } else {
                  window.scrollTo({
                    top: heading.offsetTop - 120,
                    behavior: 'smooth'
                  });
                }
                setOpen(false);
              }}
              key={index}>
              {heading.innerHTML}
            </Box>
          ))}
        </Flex>
      </TableContentBox>
      <InReviewBox id="table-of-contents">
        <Box className="table-of-contents-container">
          <Heading className="table-of-contents-heading" id="table-of-contents-heading">
            {title ? title : 'In this Review'}
          </Heading>
          {allHeadings?.map((heading, index) =>
            viewAll ? (
              <Box
                className="table-of-contents-details"
                onClick={() => {
                  if (index === 0) {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  } else {
                    window.scrollTo({
                      top: heading.offsetTop - 120,
                      behavior: 'smooth'
                    });
                  }
                  setOpen(false);
                }}
                key={index}>
                {heading.innerHTML}
              </Box>
            ) : (
              index < 5 && (
                <Box
                  className="table-of-contents-details"
                  onClick={() => {
                    if (index === 0) {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    } else {
                      window.scrollTo({
                        top: heading.offsetTop - 120,
                        behavior: 'smooth'
                      });
                    }
                    setOpen(false);
                  }}
                  key={index}>
                  {heading.innerHTML}
                </Box>
              )
            )
          )}
        </Box>
        {!viewAll && (
          <Button className="table-of-contents-view-all-button" onClick={() => setViewAll(true)}>
            View all
          </Button>
        )}
      </InReviewBox>
    </>
  );
};

const InReviewBox = styled(Box)`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
  margin: 15px;
  padding: 15px;
  border-top: 1px solid #d5d7db;
  border-bottom: 1px solid #d5d7db;
  .table-of-contents-heading {
    font-weight: 900;
    margin-bottom: 15px;
    font-size: 18px;
  }
  .table-of-contents-details {
    cursor: pointer;
    text-decoration: underline;
    margin-bottom: 10px;
    line-height: 1.3;
    font-size: 16px;
  }
  .table-of-contents-view-all-button {
    background: transparent;
    color: #e54253;
    outline: none;
    box-shadow: none;
    padding: 0px;
  }
`;

const TableContentBox = styled(Box)`
  display: none;
  @media (max-width: 800px) {
    transition: 100ms ease-in-out;
    padding: ${(props) => (props.scrollpos === 0 ? '10px' : '0px')};
    height: ${(props) => (props.scrollpos === 0 ? 'auto' : props.open ? 'auto' : '45px')};
    overflow: ${(props) => (props.open ? 'none' : 'hidden')};
    z-index: 99;
    flex-direction: column;
    position: fixed;
    top: 48px;
    padding-left: 25px;
    border-top: 3px solid #00000029;
    min-height: 45px;
    width: 100%;
    background: ${(props) => (props.scrollpos === 0 ? 'white' : props.open ? '#F3FAFC' : 'white')};
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0px -12px 25px 0px black;
    display: ${(props) => (props.condition == 'true' ? 'flex' : 'none')};
    .table-of-contents-arrow-image{
      margin-top: -2px;
    }
    .table-of-contents-container {
      border-top: 1px solid #d5d7db;
      border-bottom: 1px solid #d5d7db;
      padding: 10px;
    }
    .table-of-contents-all-heading {
      font-size: 16px;
      color: #2c2d30;
      text-decoration: underline;
      font-weight: 600;
      padding: 0px 20px 20px;
      div {
        margin-bottom: 10px;
        line-height: 1.3;
        cursor: pointer;
      }
    }
  }
`;

export default TableOfContents;
