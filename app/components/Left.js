"use client";
 import React from 'react';
 import Image from 'next/image';
 import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
 import Link from 'next/link'; 
import profilePic from '/public/assets/Images/MY.jpg';
 const LeftSide = () => {
     return (
 <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm lg:mr-10 mt-24"> 
<div className="flex flex-col items-center mb-6">
 <Image src={profilePic} alt="Profile Picture" className="rounded-full" width={150} height={150} />
 <p className="text-3xl font-bold text-white mt-4">BASED IN PAKISTAN</p>
 <p className="text-2xl font-light text-white mt-2">A Web DEVELOPER!</p>
 </div>
 <div className="flex justify-center space-x-4 mb-8">
 <a href="https://web.facebook.com/profile.php?id=61568138895850" target="_blank" rel="noopener noreferrer">
 <FaFacebook className="text-white transition-transform transform hover:scale-125 opacity-50" size={32} />
 </a> 
<a href="https://www.linkedin.com/in/abdul-basit-aa022433b/" target="_blank" rel="noopener noreferrer"> 
<FaLinkedin className="text-white transition-transform transform hover:scale-125 opacity-50" size={32} /> </a>
 <a href="https://github.com/Bazzie781" target="_blank" rel="noopener noreferrer">
 <FaGithub className="text-white transition-transform transform hover:scale-125 opacity-50" size={32} />
 </a>
 </div>
 <Link href="/contact">
 <button className="w-full py-3 bg-gradient-to-r from-[#008080] to-[#ff5100] text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"> CONNECT WITH ME </button>
 </Link>
  </div>
   );
 };
  export default LeftSide;