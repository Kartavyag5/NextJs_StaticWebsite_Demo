import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import CheckRight from '../right.svg';

export const RightIcon = (props) => {
  return (
    <Box {...props}>
      <Image
        width={'23px'}
        height={'25px'}
        src={CheckRight}
        quality={100}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        ></Image>
    </Box>
  );
};
