import { Flex, Text, Box, Link } from '@chakra-ui/react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { chakra, Container } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const Navbar = () => {
  return (
    <Box
      width="100%"
      padding="30px 0"
      fontSize="18px"
      bg="whiteAlpha.100"
      color="black"
      position="fixed"
      top="0"
      zIndex="99"
    >
      <Flex
        width="74%"
        justifyContent="space-between"
        margin="auto"
        fontWeight="bold"
        letterSpacing="0.1rem"
      >
        <Text>Logo</Text>
        <Flex columnGap="15px">
          <Link
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            position="relative"
            as={NavLink}
            _activeLink={{ color: 'gray.300  ' }}
            to="/"
          >
            Home
          </Link>
          <Link
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            position="relative"
            as={NavLink}
            to="/about"
            _activeLink={{ color: 'gray.300  ' }}
          >
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
