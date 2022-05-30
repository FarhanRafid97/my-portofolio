import { SiRedux } from 'react-icons/si';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { VscBracketError } from 'react-icons/vsc';
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiChakraui,
} from 'react-icons/si';

export default [
  {
    name: 'redux',
    component: <SiRedux />,
    y: [0, 350, 0],

    rotate: [0, 360, 0],
    duration: 30,
  },
  {
    name: 'SiTypescript',
    component: <SiTypescript />,

    y: [0, 400, 0],

    duration: 35,
  },
  {
    name: 'darkSiTypescript',
    component: <SiTypescript />,

    y: [0, 300, 0],

    duration: 35,
  },
  {
    name: 'darkReact',
    component: <FaReact />,
  },
  {
    name: 'react',
    component: <FaReact />,
    y: [0, -50, 0],
    duration: 20,
  },

  {
    name: 'SiChakraui',
    component: <SiChakraui />,
    y: [0, 240, 0],

    duration: 40,
  },
  {
    name: 'bgSiChakraui',
    component: <SiChakraui />,
    y: [0, 290, 0],

    duration: 35,
  },
  {
    name: 'FaNodeJs',
    component: <FaNodeJs />,
    y: [0, -40, 0],
    duration: 20,
  },
  {
    name: 'FaNodeJs2',
    component: <FaNodeJs />,
    y: [0, 150, 0],
    duration: 20,
  },
];
