import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import CrossWrong from '../wrong.svg';

export const WrongIcon = () => {
  return (
    <Box minW={'23px'}>
      <Image
        width={'23px'}
        height={'25px'}
        src={CrossWrong}
        quality={100}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    </Box>
  );
};
