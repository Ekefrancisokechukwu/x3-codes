import React from 'react';
// icons //
import { RiHome3Fill } from 'react-icons/ri';
import { TbAwardFilled } from 'react-icons/tb';
import { BsClipboard2DataFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';


 export const navLinks = [
  {
     id: 1,
     url: '/home',
     text: 'home',
     icon: <RiHome3Fill/>
  },
  {
    id: 2,
    url: '/programs',
    text: 'programs',
    icon: <BsClipboard2DataFill />,
  },
  {
    id: 3,
    url: '/graduates',
    text: 'graduates',
    icon: <TbAwardFilled />,
  },
  {
    id: 4,
    url: '/about',
    text: 'about us',
    icon: <TbWorld />,
  },
]

