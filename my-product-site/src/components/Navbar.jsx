import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" title="Home">
            <MdHome />
          </Link>
        </li>
        <li>
          <Link to="/about" title="About">
            <RiInformationLine />
          </Link>
        </li>
        <li>
          <Link to="/products" title="Products">
            <TbPackages />
          </Link>
        </li>
        <li>
          <Link to="/gallery" title="Gallery">
            <MdPhotoLibrary />
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Contact">
            <HiOutlinePhone />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;