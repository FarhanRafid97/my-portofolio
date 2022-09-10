import { chakra, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';
import p1 from '../../img/p1.png';
import p5 from '../../img/p5.png';
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
  const fontColor = useColorModeValue('black', 'white');
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
        color={fontColor}
        textAlign="center"
      >
        Fullstack Web Developer Based In Indonesia
      </HeadingChakra>
      <ChakraBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        display={['block', 'block', 'block', 'flex']}
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
            title="On progress"
            body="Build Pokemon Collection with Typescript,Nextjs,Graphql-request,Redux-toolkit,Chakra-ui"
            imgUrl={p4}
            bgColor="#3d5a80"
            color="gray.50"
            widthImg="90%"
            borderRadius="7px"
            hoverColor="gray.400"
            link="https://my-pokemon-collection.vercel.app/"
          />
          <Card
            title="COVID 19 CASE"
            body="Update About Covid 19 case and death"
            imgUrl={p1}
            bgColor="#3d5a80"
            color="gray.50"
            widthImg="70%"
            hoverColor="gray.400"
            borderRadius="15px"
            link="https://covid-19-case.vercel.app"
          />
        </Flex>
        <Flex
          direction="column"
          flexBasis="50%"
          mt={[25, 25, 50, 25]}
          rowGap="50px"
          alignItems="center"
        >
          <Card
            title="NEXTJS ECOMMERCE"
            body="Build Ecommerce With nextjs,redux-toolkit,chakra-ui,Typescript"
            imgUrl={p3}
            bgColor="#3d5a80"
            color="gray.50"
            hoverColor="gray.400"
            borderRadius="15px"
            widthImg="70%"
            link="https://frs-secret-shop.vercel.app/"
          />

          <Card
            title="Realtime Chatting App"
            body="Build a realtime chat app with Websocket,Typescript,Tailwind"
            imgUrl={p5}
            bgColor="#3d5a80"
            color="gray.50"
            borderRadius="15px"
            hoverColor="gray.400"
            widthImg="70%"
            link="https://github.com/FarhanRafid97/chatt_app"
          />
        </Flex>
      </ChakraBox>
    </Flex>
  );
};

export default Home;
