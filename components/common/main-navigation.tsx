import React, { useEffect, useState } from 'react';
import { Box, Tag, Text, Link, Heading, Grid } from '@chakra-ui/react';
// import Link from 'next/link';
import { CategoryFoodIcon } from '../../assets/js/categoryFoodIcon';
import { CategorySupplementsIcon } from '../../assets/js/categorySupplementsIcon';
import { CategoryHearingIcon } from '../../assets/js/categoryHearing';
import { CategoryEyeIcon } from '../../assets/js/categoryEyeIcon';
import { CategoryDentalIcon } from '../../assets/js/categoryDentalIcon';
import { CategoryMenHealthIcon } from '../../assets/js/categoryMenHealthIcon';
import { CategoryWomenHealthIcon } from '../../assets/js/categoryWomenHealth';
import { CategoryMoreIcon } from '../../assets/js/categoryMoreIcon';
import styled from '@emotion/styled';
import { HomepageMainnavFoodNutrition } from '../../assets/js/homepageMainnavFoodNutrition';
import { HomepageMainnavHealthProducts } from '../../assets/js/homepageMainnavHealthProducts';
import { HomepageMainnavHomeTesting } from '../../assets/js/homepageMainnavHomeTesting';
import { HomepageMainnavOnlineTherapy } from '../../assets/js/homepageMainnavOnlineTherapy';
import { HomepageMainnavTelehealth } from '../../assets/js/homepageMainnavTelehealth';
import { HomepageMainnavAnatomyIll } from '../../assets/js/homepageMainnavAnatomyIll';

const matchpattern =
  // eslint-disable-next-line no-useless-escape
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;

const Icons = (props) => {
  const { name } = props;

  let icon = null;
  if (name === 'CategoryFoodIcon') icon = CategoryFoodIcon;
  if (name === 'CategorySupplementsIcon') icon = CategorySupplementsIcon;
  if (name === 'CategoryHearingIcon') icon = CategoryHearingIcon;
  if (name === 'CategoryEyeIcon') icon = CategoryEyeIcon;
  if (name === 'CategoryDentalIcon') icon = CategoryDentalIcon;
  if (name === 'CategoryMenHealthIcon') icon = CategoryMenHealthIcon;
  if (name === 'CategoryWomenHealthIcon') icon = CategoryWomenHealthIcon;
  if (name === 'CategoryMoreIcon') icon = CategoryMoreIcon;
  if (name === 'HomepageMainnavFoodNutrition') icon = HomepageMainnavFoodNutrition;
  if (name === 'HomepageMainnavHealthProducts') icon = HomepageMainnavHealthProducts;
  if (name === 'HomepageMainnavHomeTesting') icon = HomepageMainnavHomeTesting;
  if (name === 'HomepageMainnavOnlineTherapy') icon = HomepageMainnavOnlineTherapy;
  if (name === 'HomepageMainnavTelehealth') icon = HomepageMainnavTelehealth;
  if (name === 'HomepageMainnavAnatomyIll') icon = HomepageMainnavAnatomyIll;

  return React.createElement(icon, { ...props });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainNavigation = ({ title, byline, navigationData, noOfColumns, fromPage }) => {
  return (
    <StyledMainNaigation frompage={fromPage} noofcolumns={noOfColumns}>
      <Box className="main-navigation-container">
        <Heading className="main-navigation-title">{title}</Heading>
        <Text as="span" className="main-navigation-byline">
          {byline}
        </Text>
        <Grid
          className="main-navigation-cards"
          templateColumns={`repeat(${noOfColumns}, 1fr)`}
          gap={4}>
          {navigationData?.map((data, index) => (
            <div key={index}>
              <Link
                className="main-navigation-card"
                key={index}
                href={!matchpattern?.test(data?.url) ? '#' : data?.url}
                onClick={() => {
                  !matchpattern?.test(data?.url) &&
                    window.scrollTo({
                      top: document?.getElementById(data?.url?.toLowerCase())?.offsetTop - 160,
                      behavior: 'smooth'
                    });
                }}>
                <Icons
                  className="main-navigation-card-icon"
                  name={data.image}
                  title={data.link}
                  boxSize="100%"
                />
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'flex-end'}
                  lineHeight={1}
                  flex={1}>
                  <Text as="span" className="main-navigation-card-title">
                    {data.link}
                  </Text>
                </Box>
              </Link>
            </div>
          ))}
        </Grid>
      </Box>
    </StyledMainNaigation>
  );
};

const StyledMainNaigation = styled(Box)`
  height: 100%;
  width: 100%;
  min-height: 518px;
  font-family: proxima-nova;
  background-image: linear-gradient(#e2f7fc 0%, white);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid black; */

  .main-navigation-container {
    max-width: ${(props) => (props.frompage === 'homePage' ? '730px' : '1127px')};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    ${(props) => props.frompage === 'homePage' && 'align-items: center;'}
    @media (max-width: 1150px) {
      padding: 20px;
    }
    .main-navigation-title {
      font-size: 42px;
      font-weight: bold;
      line-height: 1.1;
      margin-bottom: 22px;
      color: #404145;
      ${(props) => props.frompage === 'homePage' && 'text-align: center;'}

      @media (max-width: 535px) {
        line-height: 36px !important;
      }
      @media (max-width: 710px) {
        font-size: 28px !important;
      }
    }
    .main-navigation-byline {
      margin-bottom: 52px;
      font-size: 21px;
      color: #5a6871;
      line-height: 30px;
      ${(props) => props.frompage === 'homePage' && 'text-align: center;'}

      @media (max-width: 535px) {
        margin-bottom: 30px;
      }
      @media (max-width: 710px) {
        font-size: 16px !important;
        line-height: 21px;
      }
    }
    .main-navigation-cards {
      @media (max-width: 1120px) {
        grid-template-columns: ${(props) =>
          props?.noofcolumns < 4
            ? `repeat(${props?.noofcolumns}, 1fr) !important`
            : `repeat(4, 1fr) !important`};
      }
      @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .main-navigation-card {
        transition: 100ms;
        max-height: 100px;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
        box-shadow: 0px 10px 20px #0000001a;
        font-size: 18px;
        @media (max-width: 550px) {
          width: 155px;
          margin: 0px auto;
          flex-direction: column;
          max-height: none;
        }
        &:focus {
          outline: 2px solid black;
        }
        &:hover {
          border: 2px solid grey;
        }
        .main-navigation-card-icon {
          height: 50px;
          width: 50px;
          margin-right: 10px;
          @media (max-width: 550px) {
            margin-bottom: 10px;
          }
        }
        .main-navigation-card-title {
          text-align: left;
          min-width: max-content;
          @media (max-width: 550px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export default MainNavigation;
