import {
  Box,
  chakra,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import myProfile from '../../img/me.png';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const ChakraText = chakra(motion.p, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const About = () => {
  const word = 'Hi welcome To my page';
  const wordArray = word.split('');
  console.log(wordArray);
  return (
    <Box>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        minH="70vh"
        overflow="hidden"
      >
        <Box flex="1.2" paddingTop={['20px']}>
          <Flex>
            {wordArray.map((word, i) => (
              <ChakraText
                fontSize={['20px', '24px']}
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
            initial={{ scaleX: 0 }}
            animate={{ scaleX: '100%', transformOrigin: 'left' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            h="2px"
            w={['200px', '240px']}
            mb="4px"
            backgroundColor="black"
          />
          <ChakraBox
            initial={{ scaleX: 0 }}
            animate={{ scaleX: '100%', transformOrigin: 'left' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            mb={8}
            w={['170px', '240px']}
            h="2px"
            backgroundColor="black"
          />
          <ChakraText
            fontSize={['18px', '24px']}
            letterSpacing="0.1rem"
            fontWeight="thin"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          >
            I'm a 24 years old fullstack web developer based in Indonesia and
            currently Study on binar academy Bootcamp(fullstack web developer)
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
            direction="column"
            justifyContent="center"
            p={5}
            shadow="md"
            w="80%"
            borderWidth="1px"
          >
            <Box>
              <Image
                src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png"
                w="100px"
              />
            </Box>
            <Flex
              direction={['column', 'row']}
              alignItems="center"
              rowGap="15px"
              flex="1.5"
              my={4}
            >
              <Heading fontSize="xl">Binar Academy</Heading>
              <Text color="gray.400" fontSize={['12px', '24px']} mt={4}>
                Fullstack web developer
              </Text>
            </Flex>

            <Text>feb-2022 - sep-2022</Text>
          </Flex>
        </VStack>
        <VStack mb={8}>
          <Flex
            alignItems="center"
            columnGap="35px"
            direction="column"
            justifyContent="center"
            p={5}
            shadow="md"
            w="80%"
            borderWidth="1px"
          >
            <Box>
              <Image
                src="https://cdn.kibrispdr.org/data/119/download-logo-upi-yptk-padang-png-1.jpg"
                w="100px"
              />
            </Box>
            <Flex
              direction={['column', 'row']}
              alignItems="center"
              rowGap="15px"
              flex="1.5"
              my={4}
            >
              <Heading fontSize={['md', 'xl']}>Upi YPTK Padang</Heading>
              <Text color="gray.400" fontSize={['12px', '24px']} mt={4}>
                Computer Sience
              </Text>
            </Flex>

            <Text>feb-2022 - sep-2022</Text>
          </Flex>
        </VStack>
      </ChakraBox>
    </Box>
  );
};

export default About;
