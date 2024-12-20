import React from 'react';
 import backgroundImage from '/public/assets/Images/Bg.jpg';
  const Page = () => { 
    return ( 
      <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
     <div className='flex flex-col items-center justify-center min-h-screen '>
     <h1 className='text-white text-2xl lg:text-4xl mb-8 text-center'>
     I&apos;m looking for... </h1>
     <div className='flex flex-col m-7 space-y-4'>
     <button className='w-64 p-4 bg-white text-black font-thin rounded shadow-md hover:bg-gray-100'> I am looking for a product </button> 
    <button className='w-64 p-4 bg-white text-black font-thin  rounded shadow-md hover:bg-gray-100'> I am looking for some advice </button>
   <button className='w-64 p-4 bg-white text-black font-thin rounded shadow-md hover:bg-gray-100'> I need an idea </button>
   <button className='w-64 p-4 bg-white text-black font-thin rounded shadow-md hover:bg-gray-100'> My nearest store </button>
   </div>
   </div>
   </div>
   );
 };
  export default Page;