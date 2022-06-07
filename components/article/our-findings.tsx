import { Box, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
// import ReactStars from 'react-rating-stars-component';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type Props = {
  ratings: number;
  heading: string;
  ratingText: string;
};

const OurFindings: FC<Props> = ({ ratings, heading, ratingText }) => {
  return (
    <OurFindingsBox>
      <Heading className="our-findings-heading" data-name="article-heading">
        {heading}
      </Heading>
      <Box className="our-findings-details">
        <Text as="span" className="our-findings-details-head">
          {ratingText}
        </Text>
        <Rating
          fractions={20}
          readonly={true}
          start={0}
          stop={5}
          initialRating={ratings}
          emptySymbol={<FontAwesomeIcon className="star-empty-icon" icon={faStar} />}
          fullSymbol={<FontAwesomeIcon className="star-full-icon" icon={faStar} />}
        />
        <Text as="span" className="our-findings-details-rating">
          {parseFloat(`${ratings}`).toFixed(2)}
        </Text>
      </Box>
    </OurFindingsBox>
  );
};

const OurFindingsBox = styled(Box)`
  margin: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: proxima-nova;
  color: #404145;
  .our-findings-heading {
    font-size: 32px;
  }
  .our-findings-details {
    display: flex;
    align-items: center;
    font-size: 24px;
    .our-findings-details-head {
      margin-right: 30px;
    }
    .star-empty-icon {
      color: #bdc3c7;
      height: 24px;
    }
    .star-full-icon {
      color: #fcb017;
      height: 24px;
    }
    .our-findings-details-rating {
      font-weight: bold;
      margin-left: 16px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    .our-findings-heading {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .our-findings-details {
      font-size: 16px;
      .our-findings-details-head {
        margin-right: 24px;
      }
      .star-empty-icon {
        height: 19px;
      }
      .star-full-icon {
        height: 19px;
      }
    }
  }
`;

export default OurFindings;
