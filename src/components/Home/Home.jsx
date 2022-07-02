import { Box, chakra, Flex, Image, Link, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';

import p1 from '../../img/p1.png';
import p3 from '../../img/p3.png';
import './Home.css';

const HeadingChakra = chakra(motion.h2, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const CountaienrChakra = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Home = () => {
  return (
    <Flex
      py="35px"
      alignItems="center"
      minH="100vh"
      color="black"
      direction="column"
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
    >
      <HeadingChakra
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        mb={28}
        fontSize="40px"
        fontWeight="bold"
        width="600px"
        textAlign="center"
      >
        Fullstack Web Developer Based In Indonesia
      </HeadingChakra>
      <CountaienrChakra
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        display="flex"
        flexWrap="wrap"
        rowGap="25px"
        w="100%"
        justifyContent="center"
      >
        <Flex
          direction="column"
          alignItems="center"
          rowGap="25px"
          flexBasis="50%"
        >
          <Text
            py={6}
            px={7}
            fontSize="20px"
            textAlign="end"
            fontWeight="bold"
            color="#999999"
          >
            My name is farhan.I'm fullstack web developer,i like using
            react/nextjs on frontend and express on backend .Please feel free to
            check out some projects I've been working on
          </Text>
          <Link
            className="linkPorto"
            w="90%"
            href="https://www.google.com/"
            target="_blank"
            _hover={{ textDecoration: 'none ' }}
            position="relative"
            bg="#3c6e71"
            transition="0.3s"
            color="gray.50"
            _hover={{ color: 'black' }}
          >
            <Flex
              direction="column"
              justifyContent="space-between "
              alignItems="center"
              paddingBottom="5px"
            >
              <Box w="100%" p="25px" mb={16}>
                <Text fontSize="18px" fontWeight="bold">
                  COVID 19 CASE
                </Text>
                <Text w="350px" mt={8} fontSize="18px" fontWeight="medium">
                  Update About Covid 19 case and death
                </Text>
              </Box>

              <Image
                className="imagePorto1"
                borderRadius="15px"
                className="imagePorto1"
                w="70%"
                src={p1}
              />
            </Flex>
          </Link>
        </Flex>
        <Flex direction="column" flexBasis="50%" alignItems="center">
          <Link
            className="linkPorto"
            w="90%"
            href="https://www.google.com/"
            target="_blank"
            _hover={{ textDecoration: 'none ' }}
            position="relative"
            bg="#3d5a80"
            transition="0.3s"
            color="gray.50"
            _hover={{ color: 'gray.400' }}
          >
            <Flex
              direction="column"
              justifyContent="space-between "
              alignItems="center"
              paddingBottom="5px"
            >
              <Box w="100%" p="25px" mb={16}>
                <Text fontSize="18px" fontWeight="bold">
                  NEXTJS ECOMMERCE
                </Text>
                <Text w="350px" mt={8} fontSize="18px" fontWeight="medium">
                  Build Ecommerce With nextjs, redux and chakra ui
                </Text>
              </Box>

              <Image
                borderRadius="12px"
                className="imagePorto1"
                w="70%"
                src={p3}
              />
            </Flex>
          </Link>
        </Flex>
      </CountaienrChakra>
    </Flex>
  );
};

export default Home;
