import React, { FC, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMain } from '../../assets/js/logoMain';
// import { SearchIcon } from '../../assets/js/searchIcon';
import { ToggleIcon } from '../../assets/js/menu';
import styled from '@emotion/styled';
//@ts-ignore
import navbarData from '../../data/global/menu.yml';
import Imgix from 'react-imgix';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

const Navbar: FC = (props: any) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [showAccordion, setShowAccordion] = useState<boolean>(false);
  const [TOCCondition, setTOCCondition] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState(props?.frontMatter?.menu);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  useEffect(() => {
    setScrollValue(window.scrollY);
    initialLoad();
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setTOCCondition(
      scrollValue >
        document.getElementById('table-of-contents')?.offsetHeight +
          document.getElementById('table-of-contents')?.offsetTop -
          60
    );
    changeProfilePage();
  }, [scrollValue]);

  useEffect(() => {
    changeHeader();
    changeProfilePage();
  }, [showSearch]);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', changeHeader);
      window.removeEventListener('resize', onPageResize);
    };
  }, [showAccordion]);

  const onPageResize = () => {
    setInnerWidth(window.innerWidth);
    const navbarHeight = document.getElementById('navbar').clientHeight.toString();
    const profileRef = document.getElementById('profile');
    if (profileRef) {
      profileRef.style.paddingTop = navbarHeight + 'px';
    }
  };

  const initialLoad = () => {
    setScrollValue(window.scrollY);
    const navbarHeight = document.getElementById('navbar')?.clientHeight?.toString();
    const profileRef = document.getElementById('profile');
    if (profileRef) {
      profileRef.style.paddingTop = navbarHeight + 'px';
    }
    window.addEventListener('scroll', changeHeader);
    window.addEventListener('resize', onPageResize);
    const menuItem = document.getElementsByClassName('navbar-menu-item');
    for (let i = 0; i < menuItem?.length; i++) {
      menuItem?.[i]?.setAttribute('tabindex', '0');
    }
  };
  const changeHeader = () => {
    setScrollValue(window.scrollY);
  };
  const changeProfilePage = () => {
    const profileRef = document.getElementById('profile');
    // const stickyTOCRef = document.getElementById('sticky-table-of-contents');
    if (profileRef) {
      profileRef.style.transition = '0.1s ease-in';
      if (scrollValue > 0) {
        // profileRef.style.paddingTop = showSearch ? '120px' : '60px';
        profileRef.style.paddingTop = '60px';
      } else {
        if (window.innerWidth < 993) {
          // profileRef.style.paddingTop = showSearch ? '120px' : '60px';
          profileRef.style.paddingTop = '50px';
        } else {
          // profileRef.style.paddingTop = showSearch ? '180px' : '120px';
          profileRef.style.paddingTop = '120px';
        }
      }
    }
    // if (stickyTOCRef) {
    //   stickyTOCRef.style.top = showSearch ? '120px' : '60px';
    // }
  };
  const loadMenu = () => {
    return navbarData.menus.map((menu, index) => popoverContainer(menu, index));
  };
  const popoverContainer = (menu, index) => {
    return (
      <Popover trigger="hover" key={index}>
        <PopoverTrigger>{headerData(menu)}</PopoverTrigger>
        <PopoverContent>
          {menu.menu_columns && menu.menu_columns?.length > 0 && (
            <>
              <PopoverArrow />
              {popoverBody(menu)}
            </>
          )}
        </PopoverContent>
      </Popover>
    );
  };
  const headerData = (menu) => (
    <Box
      mr="20px"
      cursor="pointer"
      minW={'max-content'}
      fontFamily="proxima-nova"
      fontWeight="700"
      borderBottom={
        currentPath?.toLowerCase() === menu?.menu_name?.toLowerCase() && '4px solid #16a0b7'
      }
      padding={
        currentPath?.toLowerCase() === menu?.menu_name?.toLowerCase()
          ? '13px 10px 12px !important'
          : '13px 10px 16px !important'
      }
      className="navbar-menu-item"
      onMouseEnter={() => setCurrentPath('')}
      onMouseLeave={() => setCurrentPath(props?.frontMatter?.menu)}>
      {menu.menu_link ? (
        <Link href={menu?.menu_link} passHref>
          <a>
            <Box as="span" fontWeight="bold">
              {menu.menu_name}
            </Box>
          </a>
        </Link>
      ) : (
        <Box as="span" fontWeight="bold">
          {menu.menu_name}
        </Box>
      )}
    </Box>
  );
  const popoverBody = (menu) => (
    <PopoverBody padding={0}>
      <PopoverBox paddingBottom={menu.view_all_link ? '25px' : '0px'}>
        <Box className="navbar-popover-columns">
          {menu.menu_columns &&
            menu.menu_columns.map((column, index) => (
              <Box
                className={`navbar-popover-column ${column.name && index !== 0 && 'marginL'}`}
                key={index}>
                {menu.menu_columns.length > 1 && (
                  <Box className="navbar-popover-column-head">
                    <Box className={`unlinked-header ${!column.name && 'opacity-zero'}`}>
                      {column.name ? column.name : 'abcd'}
                    </Box>
                  </Box>
                )}

                {column.links.map((link, index) => (
                  <Box
                    className={`navbar-popover-column-link ${
                      !column.name && menu.menu_columns.length > 1 && 'marginL'
                    }`}
                    key={index}>
                    <Link href={link.link}>
                      <a>{link.name}</a>
                    </Link>
                  </Box>
                ))}
              </Box>
            ))}
        </Box>
        {menu.view_all_link && (
          <Box className="navbar-popover-viewall-link">
            <Link href={menu.view_all_link}>
              <a>
                <Text as="span">
                  View all{' '}
                  <Text className="navbar-popover-viewall-link-arrow" as="span">
                    &gt;
                  </Text>
                </Text>
              </a>
            </Link>
          </Box>
        )}
      </PopoverBox>
    </PopoverBody>
  );

  const renderAccordion = () => (
    <AccordionBox show={showAccordion.toString()}>
      <Accordion allowToggle className="navbar-accordion">
        {navbarData.menus.map((menuData, index) => (
          <AccordionItem key={index} className="navbar-accordion-item">
            <h2>
              <AccordionButton
                _expanded={{ borderLeft: '5px solid #16A0B7' }}
                className="navbar-accordion-button">
                <Box flex="1" textAlign="left">
                  {menuData.menu_name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="navbar-accordion-panel">
              {menuData.menu_columns?.map((menuColumnData, index) => (
                <Box key={index} className="navbar-accordion-panel-box">
                  <Text className="navbar-accordion-panel-column-title unlinked-header">
                    {menuColumnData.name}
                  </Text>
                  {menuColumnData?.links.map((linkData, index) => (
                    <Link href={linkData.link} key={index}>
                      <a>
                        <Text className="navbar-accordion-panel-column-link">{linkData.name}</Text>
                      </a>
                    </Link>
                  ))}
                </Box>
              ))}
              {menuData.view_all_link && (
                <Box className="navbar-accordion-panel-view-all-link">
                  <Link href={menuData.view_all_link}>
                    <a>
                      <Text className="linked-header navbar-accordion-panel-header">View All</Text>
                    </a>
                  </Link>
                </Box>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </AccordionBox>
  );

  return (
    <>
      <NavbarBox scrolly={scrollValue ?? 0} id="navbar" condition={TOCCondition.toString()}>
        <Box className="navbar-container">
          <Box className="navabr-logo-area">
            <Link href="/">
              <a>
                <LogoMain className="navbar-logo-main" redcolor="#e54253" blackcolor="#2a2a35" />
              </a>
            </Link>
          </Box>
          
          <Box className="navabr-menu-area">
            <Box className="navbar-menu-container">{loadMenu()}</Box>
            <Box className="navbar-search-icon-box" onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? (
                <CloseIcon width={15.8} height={15.8} />
              ) : (
                <SearchIcon className="navbar-search-icon" aria-label="Navbar Search" />
              )}
            </Box>
           
            {showAccordion ? (
              <IconButton
                className="navbar-toggle-icon"
                aria-label="Navbar Toggle Icon"
                onClick={() => setShowAccordion(false)}>
                <CloseIcon width={21} height={21} />
              </IconButton>
            ) : (
              <IconButton
                className="navbar-toggle-icon"
                aria-label="Navbar Toggle Icon"
                onClick={() => setShowAccordion(true)}>
                <ToggleIcon alt={'Navbar Toggle Icon'} />
              </IconButton>
            )}
          </Box>
        </Box>
        {showSearch && (
          <SearchBox id="navbar-searchbox">
            <Input placeholder="I'm Looking For.." />
            <Button>
            <SearchIcon className="navbar-search-icon" aria-label="Navbar Search" color={'#ffffff'}/>
            {innerWidth > 992 ? <Text>Search</Text> : ''}
            </Button>
          </SearchBox>
        )}
      </NavbarBox>
      {renderAccordion()}
    </>
  );
};

const SearchBox = styled(Box)`
  width: 100%;
  border-top: 2px solid #d5d7db;
  border-bottom: 2px solid #d5d7db;
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0px 3px 0px;
  input {
    margin: 0px 10px;
    width: 400px;
    @media (max-width: 490px){
      width:100%;
    }
  }
  @media (max-width: 490px){
    padding: 3px 10px;
  }
  button {
    overflow: hidden;
    position: relative;
    transition: 200ms;
    background: #16A0B7;
    color: white;
    margin: 0px 10px 0px 0px;
    p {
      z-index: 1;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      color: rgba(0, 0, 0, 0.5);
      background-color: rgba(0, 0, 0, 0.3);
      transition: 400ms;
    }
    &:hover {
      background: #9fa1a6;
      &::before {
        width: 100%;
        pointer-events: none;
      }
    }
  }
`;

const AccordionBox = styled(Box)`
  margin-left: ${(props) => (props.show == 'true' ? '0vw' : '100vw')};
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  height: 100%;
  background: white;
  position: fixed;
  z-index: 100;
  margin-top: 60px;
  overflow: hidden;
  overflow-y: scroll;
  font-size: 14px;
  font-family: proxima-nova;
  transition: 0.5s ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .navbar-accordion-panel-view-all-link {
    padding-top: 10px;
  }

  .navbar-accordion {
    background: white;
    margin-bottom: 60px;
    .navbar-accordion-item {
      background: white;
      .navbar-accordion-button {
        &:focus {
          box-shadow: none;
        }
        &:hover {
          background: white;
        }
        svg {
          color: #e54253;
          font-size: 30px;
        }
      }
      .chakra-collapse {
        background: #f3fafc;
        .navbar-accordion-panel {
          padding: 0px 0px;
          padding-top: 12px;
          padding-bottom: 10px;
          p {
            margin: 0;
          }
          .navbar-accordion-panel-header {
            line-height: 30px;
            padding: 0px 25px;
          }
          .navbar-accordion-panel-box {
            .navbar-accordion-panel-column-title {
              line-height: 30px;
              padding: 0px 25px;
              /* font-size: 12px; */
            }
            .navbar-accordion-panel-column-link {
              line-height: 37px;
              border-bottom: 1px solid #d5d7db;
              padding: 0px 25px;
              padding-top: 2px;
            }
          }
        }
      }
    }
  }
`;

const PopoverBox = styled(Box)`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;

  .navbar-popover-viewall-link {
    position: absolute;
    bottom: 0;
    right: 10px;
    font-weight: bold;
    padding-top: 10px;
    text-decoration: none;
    padding-right: 8px;
    .navbar-popover-viewall-link-arrow {
      color: #f21200;
      font-weight: bold;
    }
  }

  .opacity-zero {
    opacity: 0;
    cursor: default;
  }

  .marginL {
    margin-left: 20px !important;
  }

  .linked-header {
    font: 14px;
    color: #e54253;
    font-weight: bold;
  }
  .unlinked-header {
    font: 14px;
    color: #9fa1a6;
    font-weight: bold;
  }
  .navbar-popover-header {
    padding: 5px;
    padding-left: 0px;
  }
  .navbar-popover-columns {
    display: flex;
    margin-bottom: 10px;
    .navbar-popover-column {
      width: 100%;
      .navbar-popover-column-head {
        border-bottom: 2px solid #dddddd;
        div {
          padding: 10px 20px;
          padding-left: 0px;
          width: max-content;
          min-height: 100%;
        }
      }
      .navbar-popover-column-link {
        padding: 7px 10px;
        padding-left: 0px;
        padding-bottom: 0px;
      }
      .navbar-popover-column-link:hover {
        color: #e54253;
      }
    }
  }
`;

const NavbarBox = styled(Box)`
  position: fixed;
  max-width: 100vw;
  width: 100vw;
  /* height: ${(props) => (props?.scrolly === 0 ? '120px' : '60px')}; */
  height: auto;
  min-height: 50px;
  background-color: #fff;
  font-family: proxima-nova;
  z-index: 100;
  transition: height 0.15s;

  box-shadow: ${(props) => (props?.scrolly === 0 ? 'none' : '0px 0px 20px 3px rgb(0, 0, 0, 0.2)')};
  /* box-shadow: 0px 0px 20px 3px rgb(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  @media (max-width: 800px) {
    border-bottom: ${(props) =>
      props?.condition == 'true'
        ? '1px solid #eaebed'
        : props?.scrolly === 0
        ? '1px solid #eaebed'
        : 'none;'};
    box-shadow: ${(props) =>
      props?.condition == 'true'
        ? 'none'
        : props?.scrolly === 0
        ? 'none'
        : '0px 0px 20px 3px rgb(0, 0, 0, 0.2)'};
  }

  @media (max-width: 992px) {
    height: 50px;
  }
  .navbar-container {
    display: ${(props) => (props?.scrolly === 0 ? 'initial' : 'flex')};
    align-items: ${(props) => (props?.scrolly === 0 ? 'none' : 'center')};
    max-width: 980px;
    width: 100%;
    min-height: 60px;
    /* height: 100%; */
    height: ${(props) => (props?.scrolly === 0 ? '120px' : '60px')};
    margin: 0px auto;
    overflow: hidden;
    /* transition: all 0.3s; */

    @media (max-width: 992px) {
      transition: 0ms;
      display: flex;
      padding: 0px 20px;
      min-height: 50px;
      max-height: 50px;
      align-items: center;
      .navabr-logo-area {
        transition: 0ms;
        justify-content: flex-start !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
      }
      .navabr-menu-area {
        transition: 0ms;
        justify-content: flex-end !important;
        animation: none !important;
      }
    }

    @media (max-width: 500px) {
      max-width: 100vw;
      padding: 0px 20px;
    }
    .navabr-logo-area {
      width: ${(props) => (props?.scrolly === 0 ? '100%' : '19%')};
      /* width: 100%; */
      padding-top: ${(props) => (props?.scrolly === 0 ? '20px' : '0px')};
      padding-bottom: ${(props) => (props?.scrolly === 0 ? '5px' : '0px')};
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      
      /* transition: all 0.2s; */
      .navbar-logo-main {
        width: 180px;
        height: 35px;
        @media (max-width: 992px) {
          width: 140px;
          height: 27px;
        }
      }
    }
    .navabr-menu-area {
      width: ${(props) => (props?.scrolly === 0 ? '100%' : '100%')};
      display: flex;
      justify-content: ${(props) => (props?.scrolly === 0 ? 'center' : 'flex-end')};
      align-items: center;
      height: 60px;
      @media (max-width: 992px) {
        height: 50px;
      }
      /* transition: all 0.3s; */
      /* animation: ${(props) => (props?.scrolly === 0 ? 'none' : 'menu 0.5s')}; */
      .navbar-search-icon-box {
        cursor: pointer;
        min-width: 18px;
        min-height: 18px;
        line-height: 0;
        border-radius: 7px;
        padding: 10px;
        @media (max-width: 992px) {
          margin-left: 0px;
        }
      }
      .navbar-toggle-icon {
        display: none;
        margin-left: 10px;
        background-color: white;
        max-width: min-content;
        @media (max-width: 992px) {
          display: block;
          margin-left: 0px;
        }
      }
      .navbar-menu-container {
        align-items: center;
        display: flex;
        height: 60px;
        align-items: flex-end;
        @media (max-width: 992px) {
          display: none;
        }
        .chakra-popover__content {
          width: auto;
          border: none !important;
          &:focus {
            box-shadow: none;
          }
          .chakra-popover__arrow-positioner {
            z-index: 2 !important;
          }
          .chakra-popover__body {
            border: 1px solid #f3f3f3;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            border-radius: 4px;
            z-index: 1;
            padding-bottom: 15px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 15px;
          }
        }
        .navbar-menu-item {
          padding: 13px 10px 17px;
          height: min-content;
          cursor: pointer;
          font-weight: 700;
          min-width: max-content;
          &:hover {
            padding: 13px 10px 12px !important;
            border-bottom: 4px solid #16a0b7;
          }
        }
      }
    }
  }
  @keyframes menu {
    0% {
      width: 0%;
      opacity: 0;
    }
    100% {
      width: 100%;
      opacity: 1;
    }
  }
`;

export default Navbar;
