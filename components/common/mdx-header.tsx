import { Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  text: string;
  shortText: string;
};

const Header: FC<Props> = ({ text, shortText }) => {
  return (
    <Heading
      color="#404145"
      m={'10px'}
      className="article-heading"
      data-name="article-heading"
      shorttext={shortText}>
      {text}
    </Heading>
  );
};

export default Header;
