import React  ,{useState, useEffect} from 'react';
import {navLinks} from '../constants/index.js'
import {Link} from 'react-router-dom';
import { styles } from '../styles.js';
import {swoc} from '../assets'
const Navbar = () => {
    const [active, setActive] = useState("");


    return (
        <nav className ={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#ffffff]`}>
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" 
        className="flex items-center gap-5"
        onClick={()=>{setActive("");
        window.scrollTo(0,0);}}>
        <img src={swoc} alt="logo" className="w-9 h-9 object-contain rounded-full"/>
          <p className='text-black text-[18px] font-bold cursor-pointer flex'>LegalFirm
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active === link.title ? "text-white"
          : "text-[#040404]"} hover:text-[#6e2ca3] text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
    </nav>
    );
};

export default Navbar;
