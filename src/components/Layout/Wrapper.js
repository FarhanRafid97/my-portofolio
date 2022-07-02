import { Box } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './Navbar';

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box w="100%" mt="89px">
        <Box w="80%" margin="auto">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
