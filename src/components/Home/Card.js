import { Box, chakra, Flex, Image, Link, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './Home.css';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Card = ({
  title,
  body,
  imgUrl,
  bgColor,
  color,
  hoverColor,
  link,
  borderRadius,
  widthImg,
}) => {
  return (
    <Link
      className="linkPorto"
      w={['340px', '90%']}
      href={link}
      target="_blank"
      position="relative"
      bg={bgColor}
      transition="0.3s"
      color={color}
      borderRadius="4px"
      _hover={{ color: hoverColor, textDecoration: 'none ' }}
    >
      <Flex
        direction="column"
        justifyContent="space-between "
        minH={600}
        alignItems="center"
        paddingBottom="15px"
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

          <Text maxW="350px" mt={8} fontSize="18px" fontWeight="medium">
            {body}
          </Text>
        </Box>

        <Image
          className="imagePorto1"
          borderRadius={borderRadius}
          w={widthImg}
          src={imgUrl}
        />
      </Flex>
    </Link>
  );
};

export default Card;
