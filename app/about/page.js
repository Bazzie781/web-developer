
import React from 'react';
 import Image from 'next/image';
 import projectPic1 from '/public/assets/Images/Project1.jpg';
 import projectPic2 from '/public/assets/Images/Project2.jpg';
 import projectPic3 from '/public/assets/Images/Project3.jpg';
 import projectPic4 from '/public/assets/Images/Project4.jpg';
 import projectPic5 from '/public/assets/Images/Project5.jpg';
 import projectPic6 from '/public/assets/Images/Project6.jpg';
 import projectPic7 from '/public/assets/Images/Project7.jpg';
 import projectPic8 from '/public/assets/Images/Project8.jpg';
 const ProjectShowcase = () => { 
  const projectImages = [ projectPic1,
     projectPic2,
      projectPic3,
     projectPic4,
     projectPic5,
     projectPic6,
     projectPic7,
     projectPic8 
    ];
     return ( 
     <div className="text-white mt-12">
     <h2 className="text-2xl font-bold"> FEATURED <span className="text-orange-500">PROJECTS</span>
     </h2>
     <div className="mt-6">
     <h3 className="text-xl font-bold"></h3>
     <p className="text-sm text-gray-400 mt-2"> Crafted an engaging chat application with a sleek, intuitive interface, ensuring smooth and responsive user experiences, and designed dynamic e-commerce websites with visually appealing layouts and seamless navigation to enhance the online shopping experience. </p> <div className="grid grid-cols-4 gap-4 mt-6"> {projectImages.map((image, index) => ( <div key={index} className="flex justify-center p-2 border border-white rounded-lg shadow-lg">
     <Image src={image} alt={`Project Screenshot ${index + 1}`} width={200}  height={200}  className="object-cover w-full h-full rounded-lg" /> </div>
     ))}
      </div>
     </div>
     </div>
      );
     };
      export default ProjectShowcase;