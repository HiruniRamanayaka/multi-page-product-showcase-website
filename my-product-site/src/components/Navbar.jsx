import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdPhotoLibrary } from 'react-icons/md';
import { RiInformationLine } from 'react-icons/ri';
import { TbPackages } from 'react-icons/tb';
import { HiOutlinePhone } from 'react-icons/hi';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" title="Home" 
            className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}
          >
            <MdHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" title="About"
            className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}
          >
            <RiInformationLine />
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" title="Products"
            className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}
          >
            <TbPackages />
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" title="Gallery"
            className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}
          >
            <MdPhotoLibrary />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" title="Contact"
            className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}
          >
            <HiOutlinePhone />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;