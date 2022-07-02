import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <Flex
      alignItems="center"
      bg="red.100"
      h="100vh"
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
    >
      <div className="containerHome">
        <h3>Home</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit vitae
          facere, magni quidem minima voluptatem deserunt sit nemo suscipit,
          consequatur cupiditate, reprehenderit eveniet illum veniam. Maxime
          saepe, itaque error dolore dignissimos laborum modi, atque
          exercitationem odit ut minus nisi! Inventore rem officia eius expedita
          sint cupiditate nam recusandae eos distinctio!
        </p>
      </div>
    </Flex>
  );
};

export default Home;
