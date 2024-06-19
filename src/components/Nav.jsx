import React, { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const NavLinks = ({ isMobile, closeMenu }) => (
  <ul className={`flex ${isMobile ? 'flex-col items-center w-full transition-all duration-300 ease-in-out' : 'flex-1 justify-center items-center gap-16 hidden lg:flex'}`}>
    {navLinks.map((item) => (
      <li key={item.label} className={isMobile ? 'py-2' : ''}>
        <a 
          href={item.href}
          className='font-montserrat font-semibold leading-normal text-lg text-slate-300'
          onClick={closeMenu}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='px-4 py-8 absolute z-10 w-full bg-purple-700/55'>
      <nav className='flex justify-between items-center max-w-container mx-auto relative'>
        <a href="/">
          <img 
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>

        {/* Desktop Menu */}
        <NavLinks isMobile={false} />

        {/* Hamburger menu for mobile view */}
        <div className='lg:hidden' onClick={handleMenuToggle}>
          <img 
            src={hamburger}
            alt='Menu'
            className='w-8 h-8 cursor-pointer'
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <NavLinks isMobile={true} closeMenu={closeMenu} />
      </div>
    </header>
  );
};

export default Nav;
