import { Flex, Text, Box, Link } from '@chakra-ui/react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box
      width="100%"
      padding="30px 0"
      fontSize="18px"
      bg="black"
      position="fixed"
      top="0"
      zIndex="99"
    >
      <Flex width="80%" justifyContent="space-between" margin="auto   ">
        <Text>Logo</Text>
        <Flex columnGap="15px">
          <Link
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            position="relative"
            as={NavLink}
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
          >
            About
          </Link>
          <Link
            position="relative"
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            as={NavLink}
            to="/test"
          >
            Unknown
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
