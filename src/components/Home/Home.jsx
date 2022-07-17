import { chakra, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import p4 from '../../img/p4.png';
import Card from './Card';
import './Home.css';

const HeadingChakra = chakra(motion.h2, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const ChakraBox = chakra(motion.div, {
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
    >
      <HeadingChakra
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        mb={28}
        fontSize={['24px', '40px']}
        fontWeight="bold"
        maxW="600px"
        textAlign="center"
      >
        Fullstack Web Developer Based In Indonesia
      </HeadingChakra>
      <ChakraBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        display="flex"
        flexWrap="wrap"
        rowGap="25px"
        w="100%"
        justifyContent="center"
      >
        <Flex
          direction="column"
          alignItems="center"
          rowGap="50px"
          flexBasis="50%"
        >
          <Text
            py={6}
            px={7}
            fontSize={['16px', '20px']}
            textAlign="end"
            fontWeight="bold"
            color="#999999"
          >
            My name is farhan.I'm fullstack web developer,i like using
            react/nextjs on frontend and nodejs on backend. Please feel free to
            check out some projects I've been working on
          </Text>
          <Card
            title="COVID 19 CASE"
            body="Update About Covid 19 case and death"
            imgUrl={p1}
            bgColor="#B8D6C5"
            color="gray.50"
            hoverColor="green.600"
            link="https://covid-19-case.vercel.app"
          />
          <Card
            title="On progress"
            body="Build anonymous message like ngl"
            imgUrl={p4}
            bgColor="#e29578"
            color="gray.50"
            hoverColor="green.600"
            link="https://github.com/FarhanRafid97/ngl_clone"
          />
        </Flex>
        <Flex
          direction="column"
          flexBasis="50%"
          rowGap="50px"
          alignItems="center"
        >
          <Card
            title="NEXTJS ECOMMERCE"
            body="Build Ecommerce With nextjs, redux and chakra ui"
            imgUrl={p3}
            bgColor="#3d5a80"
            color="gray.50"
            hoverColor="gray.400"
            link="https://frs-secret-shop.vercel.app/"
          />

          <Card
            title="My Github Page"
            body="you can check out some projects I've been working on"
            imgUrl={p2}
            bgColor="#1985a1"
            color="white"
            hoverColor="blue.200"
            link="https://github.com/FarhanRafid97"
          />
        </Flex>
      </ChakraBox>
    </Flex>
  );
};

export default Home;
