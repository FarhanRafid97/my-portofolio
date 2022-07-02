import { Box, Flex, Image, Link, Text, chakra } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import p1 from '../../img/p1.png';
import './Home.css';
import { isValidMotionProp, motion } from 'framer-motion';

const HeadingChakra = chakra(motion.h2, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Card = ({ title, body, imgUrl, bgColor, color, hoverColor, link }) => {
  return (
    <Link
      className="linkPorto"
      w="90%"
      href={link}
      target="_blank"
      _hover={{ textDecoration: 'none ' }}
      position="relative"
      bg={bgColor}
      transition="0.3s"
      color={color}
      _hover={{ color: hoverColor }}
    >
      <Flex
        direction="column"
        justifyContent="space-between "
        alignItems="center"
        paddingBottom="5px"
      >
        <Box w="100%" p="25px" mb={16}>
          <Flex alignItems="center">
            <ChakraBox
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              fontSize="18px"
              mr={2}
            >
              <AiOutlineStar />
            </ChakraBox>
            <Text fontSize="18px" fontWeight="bold">
              {title}
            </Text>
          </Flex>

          <Text w="350px" mt={8} fontSize="18px" fontWeight="medium">
            {body}
          </Text>
        </Box>

        <Image
          className="imagePorto1"
          borderRadius="15px"
          w="70%"
          src={imgUrl}
        />
      </Flex>
    </Link>
  );
};

export default Card;
