import { Container, chakra, Box, keyframes } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const About = () => {
  return (
    <Container
      bg="red"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
    >
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        padding="2"
        bg="red.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        I'm Dizzy!
      </ChakraBox>
    </Container>
  );
};

export default About;
