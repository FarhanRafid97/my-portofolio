import './home.css';
import React, { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <motion.div
        className="wrapperMotion"
        animate={{
          display: 'none',
        }}
        transition={{ delay: 8.6, duration: 2 }}
      >
        <motion.div
          className="div1"
          animate={{
            scaleY: 0,
            transformOrigin: 'top',
          }}
          transition={{ delay: 6.5, duration: 2 }}
        />
        <motion.div
          className="div1"
          animate={{
            scaleY: 0,
            transformOrigin: 'bottom',
          }}
          transition={{ delay: 6.5, duration: 2 }}
        />
        <motion.div
          className="helloWorld"
          animate={{
            opacity: 0,
          }}
          transition={{ delay: 4.5, duration: 2 }}
        >
          <motion.p
            className="pText"
            initial={{ translateY: 0 }}
            animate={{
              translateY: -200,
            }}
            transition={{ delay: 0.5, duration: 1.3 }}
          >
            HELLO WORLD!
          </motion.p>

          <motion.p
            className="pText"
            initial={{ translateY: 0 }}
            animate={{
              translateY: -200,
            }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            Welcome to my page!
          </motion.p>
          <div className="blockP"></div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
