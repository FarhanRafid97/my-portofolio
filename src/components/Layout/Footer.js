import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box w="100%" bg="gray.200" color="black" padding="15px">
      <Flex
        alignItems="center"
        justifyContent="center"
        margin="auto"
        width="80%"
      >
        <AiOutlineCopyrightCircle />
        <Text>Farhan Rafid Syauqi</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
