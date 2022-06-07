import { Alert, Box, Link } from '@chakra-ui/react';

import styled from '@emotion/styled';
import React, { FC } from 'react';

type Props = {
  
};

const AboutUsFact: React.FC<Props> = (props): JSX.Element => {
  return (
    <AboutUsFactBox status="warning">
      <Box className="about-us-text">
        Since 1998, Innerbody Has Helped Over <span className="about-us-word1">100 Million</span>{' '}
        <span className="about-us-word2">People</span> On Their Journey To Health And Wellness.
        Please Join Us.
      </Box>
    </AboutUsFactBox>
  );
};

const AboutUsFactBox = styled(Alert)`
  font-family: proxima-nova;
  font-size: 32px;
  font-weight: 600;
  border-radius: 4px;
  background-color: white;
  padding: 10px;
  box-shadow:0px 5px 15px 0px lightgray;
  max-width: 1127px;
  width: auto;
  height: 203px;
  margin: 20px auto 60px auto;
 
  .about-us-text {
    width: auto;
    text-align: center;
    padding: 64px 96px;
    .about-us-word1 {
      color: #e52843;
    }
    .about-us-word2 {
      color: #16a0b7;
    }
  }

  @media (max-width:700px){
    font-size:24px;
    .about-us-text{
      padding:20px;
    }
  }

   /* @media (max-width: 700px) {
    background: linear-gradient(45deg, rgba(32,167,181,1) 0%, rgba(142,219,16,1) 100%);
    font-size: 24px;
    color:white;
    .about-us-text{
    padding:20px;
    span{
      color:white !important;
    }

    }
  } */
`;

export default AboutUsFact;
