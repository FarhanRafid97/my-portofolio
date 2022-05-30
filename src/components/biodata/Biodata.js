import React from 'react';
import './biodata.css';
import { motion } from 'framer-motion';

const Biodata = () => {
  return (
    <motion.div
      className="biodata"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 8.4, duration: 2 }}
    >
      <div className="introduce">
        <h3>Hi Im Farhan Rafid Syauqi</h3>
        <p>
          Im Junior Fullstack Web Developer And You Can Find Me In{' '}
          <a href="https://github.com/FarhanRafid97" target="_blank">
            MyGithub
          </a>{' '}
          Or{' '}
          <a
            href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
            target="_blank"
          >
            MyLinkedin
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Biodata;
