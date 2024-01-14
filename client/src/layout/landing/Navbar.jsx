import React, { useEffect, useState } from 'react';
import { navLinks } from '../../constants/index.js'
import { Link } from 'react-router-dom';
import { styles } from '../../styles.js';
import { swoc } from '../../assets/index.js'
import SignIn from '../../components/signIn.jsx';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [login, setLogin] = useState(false);
  const [scrolled , setScrolled] = useState(false);
  const body = document.querySelector("body");

  const handleScroll = () =>{
    scrollY > 0 ?
      setScrolled(true) 
    :
      setScrolled(false)
  }

  window.addEventListener("scroll" , handleScroll);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition ease-in-out delay-100 ${scrolled && "bg-[#ffffffc4] backdrop-blur-lg"}`}>
      {login && <SignIn setLogin={setLogin}/>}
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto `}>
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={swoc} alt="logo" className="w-9 h-9 object-contain rounded-full" />
          <p className={`text-white text-[18px] font-bold cursor-pointer flex transition ease-in-out delay-100 ${scrolled && "!text-black"}`}>LegalFirm
          </p>
        </Link>
        <ul className='list-none hidden items-center sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "!text-blue-500"
                : "text-white"} hover:text-blue-500 text-[18px] font-medium cursor-pointer transition ease-in-out delay-100 ${scrolled && "!text-black"}`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className='text-[18px] font-medium cursor-pointer'><button className={`list-none text-white text-center text-[18px] shadow-lg border-white border bg-transparent self-center justify-center px-8 py-1 rounded-[40px] max-md:px-5 transition ease-in-out delay-100 ${scrolled && "!text-blue-500 border-blue-500"}`} onClick={() => {setLogin(!login); body.style.overflow = "hidden"}}>Login</button></li>
          <li className='text-[18px] font-medium cursor-pointer'><button className={`list-none text-white text-center text-[18px] shadow-lg border-white border bg-transparent self-center justify-center px-8 py-1 rounded-[40px] max-md:px-5 transition ease-in-out delay-100 ${scrolled && "!text-blue-500 border-blue-500"}`}>Contact Us</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
