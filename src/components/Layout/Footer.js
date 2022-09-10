import {
  ButtonGroup,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const bgFooter = useColorModeValue('white', 'gray.700');
  return (
    <Flex
      w="100%"
      as="footer"
      bg={bgFooter}
      role="contentinfo"
      py={{ base: '6', md: '12' }}
      borderTop="1px solid #dbdbdb"
      justifyContent="center"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        rowGap="15px    "
        flexDirection="column"
      >
        <Flex justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/FarhanRafid97"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/farhanrafid97"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Flex>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
        <Text>Farhan Rafid Syauqi</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
