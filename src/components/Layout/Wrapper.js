import { Box } from '@chakra-ui/layout';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box w="100%" mt="87px" bg="#F9F9F9" paddingBottom={24}>
        <Box maxW="1065px" margin="auto" px={[15, 0]}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Wrapper;
