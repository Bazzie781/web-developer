import React from 'react';
 import { FaSearch, FaRegIdBadge, FaChevronUp } from 'react-icons/fa'; 
 const Header = () => { 
    return (
         <header className="bg-white py-4 shadow-md">
     <div className="container mx-auto flex justify-around items-center">
     <div className="flex items-center space-x-6">
     <div className="text-lg font-bold">Logo</div>
     <div className="flex items-center space-x-2">
     <span>See all colors</span> 
    <FaChevronUp className="text-black" />
 </div>
 <div className="flex items-center space-x-2"> 
    <span>Choose a product</span>
     <FaChevronUp className="text-black" /> </div>
     <div className="flex items-center space-x-2">
     <span>Ideas</span> 
     <FaChevronUp className="text-black" /> 
     </div> <span>Shop now</span>
      <div className="flex items-center space-x-2"> <span>Sustainability</span> 
    </div>
    <div className="flex items-center space-x-2">
     <span>Get support</span>
     <FaChevronUp className="text-black" />
     </div>
     </div>
     <div className="flex items-center space-x-6">
     <FaSearch className="text-black" />
     <FaRegIdBadge className="text-black" />
     </div>
     </div> 
    </header> 
);
 };
  export default Header;