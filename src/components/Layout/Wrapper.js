import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Wrapper = ({ children }) => {
  const bgHome = useColorModeValue('gray.50', 'whiteAlpha.50');
  return (
    <>
      <Navbar />
      <Box w="100%" mt="87px" bg={bgHome} paddingBottom={24}>
        <Box maxW={['80%', '80%', '80%', '1065px']} margin="auto" px={[15, 0]}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Wrapper;
