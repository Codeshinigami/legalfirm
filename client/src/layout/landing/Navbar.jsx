import React, { useState, useEffect } from 'react';
import { navLinks } from '../../constants/index.js'
import { Link } from 'react-router-dom';
import { styles } from '../../styles.js';
import { swoc } from '../../assets/index.js'
const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#ffffff]`}>
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={swoc} alt="logo" className="w-9 h-9 object-contain rounded-full" />
          <p className='text-black text-[18px] font-bold cursor-pointer flex'>LegalFirm
          </p>
        </Link>
        <ul className='list-none hidden items-center sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-violet-600"
                : "text-[#040404]"} hover:text-violet-600 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className='text-[18px] font-medium cursor-pointer'><button className=" list-none text-violet-600 text-center text-[18px] shadow-lg border-violet-600 border bg-white self-center justify-center px-8 py-1 rounded-[40px] max-md:px-5">Contact Us</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
