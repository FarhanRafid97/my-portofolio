import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import myProfile from '../../img/me.png';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const ChakraText = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const About = () => {
  const boxBg = useColorModeValue('black', 'white');
  const word = 'Hi welcome To my page';
  const wordArray = word.split('');

  return (
    <Box>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        minH="80vh"
        overflow="hidden"
        px={['0px', '0px', '0px', '50px']}
      >
        <Box flex="1.2">
          <Flex mt="70px">
            {wordArray.map((word, i) => (
              <ChakraText
                key={i}
                fontSize={['1.1rem', '24px']}
                ml={word === ' ' ? '8px' : 0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.04,
                  ease: 'easeOut',
                  delay: 0.04 * i,
                }}
              >
                {word}
              </ChakraText>
            ))}
          </Flex>
          <ChakraBox
            h="2px"
            w={['200px', '270px']}
            mb="4px"
            backgroundColor={boxBg}
          />
          <ChakraBox
            initial={{ scaleX: 0 }}
            animate={{ scaleX: '100%', transformOrigin: 'left' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            mb={8}
            w={['170px', '240px']}
            h="2px"
            backgroundColor={boxBg}
          />
          <ChakraText
            fontSize={['18px', '18px', '19px', '24px']}
            letterSpacing="0.1rem"
            fontWeight="thin"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          >
            I'm a 24 years old fullstack web developer based in Indonesia and
            currently Study on Bootcamp Binar Academy (fullstack web
            development)
          </ChakraText>
        </Box>
        <Flex justifyContent="center" alignItems="center" flex="1">
          <ChakraBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image w="400px" opacity="0.5" src={myProfile} />
          </ChakraBox>
        </Flex>
      </Flex>
      <ChakraBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
      >
        <Heading mb={8} textAlign="center">
          Education
        </Heading>
        <VStack mb={8}>
          <Flex
            alignItems="center"
            columnGap="35px"
            direction={['column', 'column', 'row', 'row']}
            justifyContent="center"
            p={5}
            shadow="md"
            w={['90%', '', '100%', '80%']}
            borderWidth="1px"
          >
            <Box>
              <Image
                src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png"
                w="100px"
              />
            </Box>
            <Flex
              direction={['column', 'column', 'column', 'row']}
              rowGap={['15px', '5px', '5px']}
              alignItems="center"
              flex="1.5"
              justifyContent="space-between"
              px="15px"
              my={4}
            >
              <Heading fontSize={['xs', '', 'md', 'xl']}>Binar Academy</Heading>
              <Text
                color="gray.400"
                fontSize={['10px', '12px', '12px', '18px']}
                mt={[4, 4, 4, 0]}
              >
                Fullstack web developer
              </Text>
            </Flex>

            <Text fontSize={['12px', '12px', '12px', '18px']}>
              feb-2022 - sep-2022
            </Text>
          </Flex>
        </VStack>
        <VStack mb={8}>
          <Flex
            alignItems="center"
            columnGap="35px"
            direction={['column', 'column', 'row', 'row']}
            justifyContent="center"
            p={5}
            shadow="md"
            w={['90%', '', '100%', '80%']}
            borderWidth="1px"
          >
            <Box>
              <Image
                src="https://cdn.kibrispdr.org/data/119/download-logo-upi-yptk-padang-png-1.jpg"
                w="100px"
                h="80px"
              />
            </Box>
            <Flex
              direction={['column', 'column', 'column', 'row']}
              rowGap={['15px', '5px', '5px']}
              alignItems="center"
              flex="1.5"
              justifyContent="space-between"
              px="15px"
              my={4}
            >
              <Heading fontSize={['xs', '', 'md', 'xl']}>
                Upi YPTK Padang
              </Heading>
              <Text
                color="gray.400"
                fontSize={['10px', '12px', '12px', '18px']}
                mt={[4, 4, 4, 0]}
              >
                Computer Science
              </Text>
            </Flex>

            <Text fontSize={['12px', '12px', '12px', '18px']}>
              2015 - sep-2020
            </Text>
          </Flex>
        </VStack>
      </ChakraBox>
    </Box>
  );
};

export default About;
