import { motion } from 'framer-motion';
import { iconBg } from './backgroundIcon';
import { iconData } from './iconData';

const Background = () => {
  return (
    <>
      {iconData.map((icon, index) => (
        <motion.div
          key={index}
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

      {iconBg.map((bg, index) => (
        <div key={index} className={`background ${bg.name}`}>
          {bg.component}
        </div>
      ))}
    </>
  );
};

export default Background;
