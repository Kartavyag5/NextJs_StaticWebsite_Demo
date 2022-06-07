import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FeaturedHeader } from '../../assets/js/featuredHeader';

type Props = {
  headerTitle: string;
  titleId?: string;
};

const HomepageCommonHeader: FC<Props> = ({ headerTitle, titleId }) => {
  return (
    <Flex
      id={headerTitle?.toLowerCase()}
      fontFamily={'proxima-nova'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      letterSpacing={3}
      fontSize={16}
      fontWeight={'bold'}
      marginBottom={'10px'}
      textTransform={'uppercase'}>
      <FeaturedHeader name="Featured Header" alt="Featured_Header" width={29} height={6} />
      <Heading fontSize={'18px'} marginTop={'3px'} textAlign={'center'}>
        {headerTitle}
      </Heading>
    </Flex>
  );
};

export default HomepageCommonHeader;
