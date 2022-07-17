import { Flex, Text, Box, Link } from '@chakra-ui/react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { chakra, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { GiFragmentedSword } from 'react-icons/gi';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  const IconDarkMode = useColorModeValue(<BsFillMoonFill />, <BsFillSunFill />);
  return (
    <Box
      width="100%"
      padding="30px 0"
      fontSize="18px"
      bg="white"
      color="black"
      position="fixed"
      borderBottom="1px solid #dbdbdb"
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
        <Box position="relative">
          <ChakraBox
            position="absolute"
            top="1px"
            left="-35px"
            fontSize="25px"
            transform="rotate(-45deg)"
            animate={{
              opacity: [0, 1, 0],
              left: [-35, -35, 95, 95, 95, 95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <GiFragmentedSword />
          </ChakraBox>
          <Text position="absolute" zIndex="10">
            FARHAN
          </Text>
        </Box>
        <Flex columnGap="15px" alignItems="center">
          <Link
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            position="relative"
            color="gray.400"
            as={NavLink}
            _activeLink={{ color: 'black' }}
            to="/"
          >
            Home
          </Link>
          <Link
            _hover={{ textDecoration: 'none' }}
            className="navigasiLink"
            position="relative"
            color="gray.400"
            as={NavLink}
            to="/about"
            _activeLink={{ color: 'black' }}
          >
            About
          </Link>
          <Box colorScheme="blackAlpha" onClick={toggleColorMode} size="lg">
            {IconDarkMode}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
