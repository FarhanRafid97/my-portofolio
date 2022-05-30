import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import backgroundIcon from './backgroundIcon';
import iconData from './iconData';

const Background = () => {
  return (
    <>
      {iconData.map((icon) => (
        <motion.div
          className={`motionIcon ${icon.name}`}
          animate={{
            y: icon.y,
            x: icon?.x,
            rotate: icon?.rotate,
          }}
          transition={{ repeat: Infinity, duration: icon.duration }}
        >
          {icon.component}
        </motion.div>
      ))}

      {backgroundIcon.map((bg) => (
        <div className={`background ${bg.name}`}>{bg.component}</div>
      ))}
    </>
  );
};

export default Background;
