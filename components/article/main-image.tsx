import React, { FC } from 'react';
// import Image from 'next/image';
import { Box, Text, Image } from '@chakra-ui/react';

type Props = {
  captionText: string;
  imageUrl: string;
  altText: string;
};

const MainImage: FC<Props> = ({ captionText, imageUrl, altText }) => {
  return (
    <Box fontFamily={'proxima-nova'} m={'10px'} w={'fit-content'} paddingLeft={'5px'}>
      <Box borderRadius={'4px'} overflow={'hidden'} boxShadow={'0px 0px 3px -1px rgba(0,0,0,0.4)'} >
        <Image src={imageUrl} alt={altText} />
      </Box>
      <Text color="#7E8085" fontSize={'14px'} textAlign={'right'} paddingRight={'0px'} marginTop={'5px'} marginBottom={'10px'}>
        {captionText}
      </Text>
    </Box>
  );
};

export default MainImage;
