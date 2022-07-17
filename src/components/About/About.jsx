import { chakra, Box, HStack, Text, Image, Flex } from '@chakra-ui/react';
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
      <HStack h="70vh" overflow="hidden">
        <Box flex="1.2">
          <Flex>
            {wordArray.map((word, i) => (
              <ChakraText
                fontSize="24px"
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
            initial={{ width: 0 }}
            animate={{ width: '280px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            h="2px"
            mb="4px"
            backgroundColor="black"
          />
          <ChakraBox
            initial={{ width: 0 }}
            animate={{ width: '230px' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            mb={8}
            h="2px"
            backgroundColor="black"
          />
          <ChakraText
            fontSize="24px"
            letterSpacing="0.1rem"
            fontWeight="bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.4 }}
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
            <Image w="400px" opacity="0.4" src={myProfile} />
          </ChakraBox>
        </Flex>
      </HStack>
    </Box>
  );
};

export default About;
