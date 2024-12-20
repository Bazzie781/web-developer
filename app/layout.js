"use client";
import React, { useState } from 'react';
 import localFont from "next/font/local";
 import "./globals.css"; 
import Header from './components/Header';
import Left from './components/Left';
const geistSans = localFont({
 src: "./fonts/GeistVF.woff",
 variable: "--font-geist-sans",
 weight: "100 900",
 });
 const geistMono = localFont({
 src: "./fonts/GeistMonoVF.woff",
 variable: "--font-geist-mono",
  weight: "100 900",
 });
 export default function RootLayout({ children })
 { 
const [activeIcon, setActiveIcon] = useState(null); 
const handleIconClick = (icon) => { setActiveIcon(icon)
 };
  return (
    <html lang="en"> 
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className="min-h-screen bg-[#333333] flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 gap-6">
 <div className="absolute top-10 left-10">
 <h1 className="text-5xl font-extrabold text-[#00BFFF]">B<span className="text-white">ASIT</span></h1>
 </div> <Left />
 <div className="flex-1 lg:ml-10 text-white space-y-8 mt-24 lg:mt-0 px-6"> {/* Added px-6 for horizontal padding */} {children} </div> 
<div className="px-6"> {/* Added px-6 for horizontal padding */} <Header activeIcon={activeIcon} handleIconClick={handleIconClick} />
 </div>
 </div>
 </body>
 </html>
  );
 }