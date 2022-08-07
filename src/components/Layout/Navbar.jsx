import { Flex, Text, Box, Link } from '@chakra-ui/react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { chakra, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { GiFragmentedSword } from 'react-icons/gi';
import MenuNav from './MenuNav';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bgSubNav = useColorModeValue('gray.100', 'gray.700');
  const navMenu = useColorModeValue('black', 'white');
  const navActive = useColorModeValue('gray.400', 'gray.500');

  const IconDarkMode = useColorModeValue(<BsFillMoonFill />, <BsFillSunFill />);
  return (
    <Box
      width="100%"
      padding="10px 0"
      fontSize="18px"
      color="black"
      position="fixed"
      top="0"
      zIndex="99"
    >
      <Flex
        width={['90%', '74%', '85%', '80%']}
        justifyContent="space-between"
        margin="auto"
        mt="15px"
        fontWeight="bold"
        letterSpacing="0.1rem"
        padding="20px"
        bg={bgSubNav}
        borderRadius="15px"
      >
        <Box position="relative">
          <ChakraBox
            position="absolute"
            top="1px"
            left="-35px"
            fontSize="25px"
            color={navMenu}
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
          <Text color={navMenu} position="absolute" zIndex="10">
            FARHAN
          </Text>
        </Box>
        <Flex columnGap="15px" alignItems="center">
          <Flex columnGap="15px">
            <Link
              display={['none', 'none', 'none', 'flex']}
              _hover={{ textDecoration: 'none' }}
              className="navigasiLink"
              position="relative"
              color={navMenu}
              as={NavLink}
              _activeLink={{ color: navActive }}
              to="/"
            >
              Home
            </Link>
            <Link
              display={['none', 'none', 'none', 'flex']}
              _hover={{ textDecoration: 'none' }}
              className="navigasiLink"
              position="relative"
              color={navMenu}
              as={NavLink}
              to="/about"
              _activeLink={{ color: navActive }}
            >
              About
            </Link>
          </Flex>
          <Box mt={[0, 0, 0, '7px']} color={navMenu} onClick={toggleColorMode}>
            {IconDarkMode}
          </Box>
          <Flex color={navMenu} display={['flex', 'flex', 'flex', 'none']}>
            <MenuNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
