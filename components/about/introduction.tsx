import { Box } from '@chakra-ui/react';
import SocialIcons from '../../components/homepage/social-icons';

const Introduction = (): JSX.Element => {
  return (
    <Box
      id="introduction"
      className="aboutPage"
      display="flex"
      justifyContent="center"
      pb={['1rem', '', '', '']}
      alignItems="center"
      textAlign="center">
      <Box display="flex">
        <Box>
          <Box as="p" fontSize={['1.25rem', '1.5rem', '3rem', '3rem']} mx={['0.5rem', '', '', '']}>
            <strong>
              We are health writers, scientists, doctors, nurses, and researchers. We share a passion for providing actionable information that helps you make informed decisions about your health.
            </strong>
          </Box>
          <Box
            as="p"
            fontSize={['1rem', '1rem', '1.4rem', '1.8rem']}
            mt="1rem"
            mx={['2rem', '4rem', '6rem', '8rem']}>
              Innerbody Research’s mission is to provide objective, science-based advice to help our readers make more informed choices about home health products and services. As the healthcare industry rapidly evolves, you can count on us to provide the most up-to-date reviews, guides and research.
          </Box>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
