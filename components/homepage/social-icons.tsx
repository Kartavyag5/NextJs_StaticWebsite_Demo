import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="flex-end">
      <Box
        as="a"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        mr="20px"
        href="https://github.com/">
        <AiOutlineGithub />
      </Box>
      <Box
        as="a"
        color="#1DA1F2"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        mr="20px"
        href="https://twitter.com/">
        <AiOutlineTwitter />
      </Box>
      <Box
        as="a"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        href="https://www.linkedin.com/">
        <AiFillLinkedin />
      </Box>
    </Box>
  );
};

export default SocialIcons;
