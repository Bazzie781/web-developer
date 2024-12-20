"use client";
import React, { useState } from 'react';
 import { FaChevronUp } from 'react-icons/fa';
  const Page = () => {
     const [policy1, setPolicy1] = useState(false);
     const [policy2, setPolicy2] = useState(false);
     return (
 <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
  <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg"> 
  <h1 className="text-black text-2xl font-bold mb-6 text-center">YOUR DETAILS</h1> <form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* First Name */} <div> 
  <label className="block text-lg font-light mb-2">First Name:</label>
   <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your first name" /> </div> {/* Last Name */} <div>
    <label className="block text-lg font-light mb-2">Last Name:</label>
     <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your last name" />
 </div>
  {/* Expected Date of Paint */} <div>
 <label className="block text-lg font-light mb-2">Expected Date of Paint:</label>
 <div className="relative">
 <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none"> 
<option>Select a date</option>
 <option>Date 1</option>
  <option>Date 2</option>
   </select> 
   <FaChevronUp className="absolute right-2 top-3 text-gray-500" /> 
   </div>
 </div> 
{/* Size of House to be Painted */}
 <div>
 <label className="block text-lg font-light mb-2">Size of House to be Painted:</label> 
<div className="relative">
 <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none">
 <option>Select size</option>
  <option>Small</option>
   <option>Medium</option>
    <option>Large</option> 
    </select>
     <FaChevronUp className="absolute right-2 top-3 text-gray-500" /> </div>
     </div> {/* Reason to Contact Us */} 
     <div className="md:col-span-2"> 
        <label className="block text-lg font-light mb-2">Your Reason to Contact Us:</label>
     <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your reason" />
     </div>
     </div> {/* Contact Details Section */}
     <div className="my-6">
     <h1 className="text-black text-2xl font-bold mb-4">CONTACT DETAILS</h1> 
    {/* Email */}
 <div className="mb-4">
     <label className="block text-lg font-light mb-2">Email:</label>
      <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
     </div> {/* Phone Number */} 
    <div className="mb-4"> <label className="block text-lg font-light mb-2">Phone Number:</label> 
<input type="tel" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your phone number" />
 </div> {/* City */} 
 <div className="mb-4"> 
    <label className="block text-lg font-light mb-2">City:</label>
 <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your city" />
  </div> 
  </div> 
  {/* Policy Agreements */}
   <div className="mb-6">
     <label className="inline-flex items-center">
 <input type="checkbox" className="form-checkbox h-5 w-5 text-brown-500" checked={policy1} onChange={() => setPolicy1(!policy1)} />
 <span className="ml-2">I agree to the terms and conditions.</span>
 </label> <br /> 
 <label className="inline-flex items-center"> 
    <input type="checkbox" className="form-checkbox h-5 w-5 text-brown-500" checked={policy2} onChange={() => setPolicy2(!policy2)} /> 
<span className="ml-2">I agree to the privacy policy.</span>
 </label> 
 </div> {/* Submit Button */}
  <div className="text-center"> <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600 transition-all" disabled={!policy1 || !policy2} > Submit </button>
   </div>
    </form>
     </div> 
     </div> 
     );
     };
      export default Page;
