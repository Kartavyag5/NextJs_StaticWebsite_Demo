import { Alert, Box, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

type Props = {
  percentage: number;
  couponCode: string;
  link: string;
};

const Coupon: FC<Props> = ({ percentage, couponCode, link }) => {
  return (
    <CouponBox status="warning">
      <Box className="coupon-text">
        <b>Special Offer: </b>
        Get {percentage}% off on your order using coupon code{' '}
        <Box as="span">
          <Link href={link}>{couponCode}</Link>
        </Box>
      </Box>
    </CouponBox>
  );
};

const CouponBox = styled(Alert)`
  font-family: proxima-nova;
  font-size: 24px;
  margin: 20px 10px;
  border-radius: 4px;
  background-color: #faf6e2;
  border: 1px solid #eadfa5;
  width: auto;

  .coupon-text a.chakra-link{
    color: #404145 !important;
  }

  @media (max-width: 650px) {
    font-size: 16px;
  }
  .coupon-text {
    width: auto;
    text-align: center;
    span {
      text-decoration: underline;
      text-transform: uppercase;
    }
  }
`;

export default Coupon;
