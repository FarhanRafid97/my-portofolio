import { Box } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './Navbar';

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box w="100%" mt="87px" bg="#F9F9F9">
        <Box w="74%" margin="auto">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
