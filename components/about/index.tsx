// import Navbar from '@/components/navbar';
import Introduction from '../../components/about/introduction';
import { Box } from '@chakra-ui/react';
import Footer from '../../components/footer';

// @ts-ignore
import footerData from '../../data/global/footer.yml';

const About = (): JSX.Element => {
  return (
    <Box minHeight="100vh" id="about">
      {/* <Navbar /> */}
      <Introduction />
      <Footer footerData={footerData} />
    </Box>
  );
};

export default About;
