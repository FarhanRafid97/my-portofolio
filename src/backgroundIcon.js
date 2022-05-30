import { SiRedux } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { VscBracketError } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai';
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
} from 'react-icons/si';

export const iconBg = [
  {
    name: 'bgRedux',
    component: <SiRedux />,
  },
  {
    name: 'bgSiTypescript',
    component: <SiTypescript />,
  },

  {
    name: 'bgSiTailwindcss',
    component: <SiTailwindcss />,
  },
  {
    name: 'bgSiJavascript',
    component: <SiJavascript />,
  },
  {
    name: 'bgSiExpress',
    component: <SiExpress />,
  },

  {
    name: 'VscBracketError',
    component: <VscBracketError />,
  },
  {
    name: 'bgBsFillBootstrapFill',
    component: <BsFillBootstrapFill />,
  },
  {
    name: 'AiFillGithub',
    component: <AiFillGithub />,
  },
];
