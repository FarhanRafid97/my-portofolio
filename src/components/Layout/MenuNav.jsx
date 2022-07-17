import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

const MenuNav = () => {
  return (
    <Menu>
      <MenuButton>
        <HiMenuAlt3 />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link
            _hover={{ textDecoration: 'none' }}
            position="relative"
            as={NavLink}
            to="/"
            fontSize="20px"
            w="100%"
            _activeLink={{ color: 'gray.400' }}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem textAlign="center">
          <Link
            textAlign="center"
            _hover={{ textDecoration: 'none' }}
            position="relative"
            as={NavLink}
            fontSize="20px"
            to="/about"
            _activeLink={{ color: 'gray.400' }}
          >
            About
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuNav;
