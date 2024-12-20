import React from 'react';
 import Image from 'next/image';
 import Your from '/public/assets/Images/Np.jpg'
  const Page = () => {
 return (
 <div className="min-h-screen bg-gray-50 flex items-center justify-center">
 <div className="container mx-auto p-6">
 <div className="flex flex-col md:flex-row items-center"> 
{/* Left Side Image */} 
<div className="w-full md:w-1/2 p-4">
 <Image src={Your} alt="Decorative Image" className="object-cover rounded-lg shadow-md" />
 </div> {/* Right Side Content Box */} 
 <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
 <h1 className="text-2xl font-light text-center mb-4"> Dulux Color of the Year 2025 - True Joy<sup>TM</sup>
 </h1>
  <p className="text-gray-700 mb-6"> This is a placeholder paragraph for the description of the Dulux Color of the Year 2025. You can describe the attributes of the color, its significance, and how it inspires joy and positivity. Feel free to expand this paragraph with more details to make it informative and engaging for the readers. </p>
 <div className="">
     <button className="bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600 transition-all"> Discover More </button>
     </div>
     </div> 
    </div>
 </div> 
 </div> 
 ); 
};
 export default Page;