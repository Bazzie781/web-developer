"use client";
import React from 'react';
 import Link from 'next/link';
 import { FaHome, FaFolderOpen, FaWrench, FaEnvelope } from 'react-icons/fa';
 const Header = ({ activeIcon, handleIconClick }) => {
 return ( 
 <div className="flex flex-col items-center justify-center h-full bg-transparent p-6 shadow-lg border border-white rounded-lg">
 <Link href="/">
 <FaHome className={`text-white mb-6 cursor-pointer transition-all duration-300 transform hover:scale-125 ${ activeIcon === 'home' ? 'bg-[#008080] rounded-lg scale-110 rotate-12 shadow-xl shadow-[#008080]/50' : '' }`} size={32} onClick={() => handleIconClick('home')} />
 </Link>
  <Link href="/about"> 
<FaFolderOpen className={`text-white mb-6 cursor-pointer transition-all duration-300 transform hover:scale-125 ${ activeIcon === 'projects' ? 'bg-[#008080] rounded-lg scale-110 rotate-12 shadow-xl shadow-[#008080]/50' : '' }`} size={32} onClick={() => handleIconClick('projects')} />
 </Link>
 <Link href="/skills"> 
<FaWrench className={`text-white mb-6 cursor-pointer transition-all duration-300 transform hover:scale-125 ${ activeIcon === 'skills' ? 'bg-[#008080] rounded-lg scale-110 rotate-12 shadow-xl shadow-[#008080]/50' : '' }`} size={32} onClick={() => handleIconClick('skills')} />
 </Link>
 <Link href="/contact">
 <FaEnvelope className={`text-white mb-6 cursor-pointer transition-all duration-300 transform hover:scale-125 ${ activeIcon === 'contact' ? 'bg-[#008080] rounded-lg scale-110 rotate-12 shadow-xl shadow-[#008080]/50' : '' }`} size={32} onClick={() => handleIconClick('contact')} />
 </Link> 
</div>
 );
 };
  export default Header;