import React from 'react';
import {FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaAddressCard  } from 'react-icons/fa';
function Contact(){
    return(
        <>
         <div className="w-full h-[200px] bg-gray-300 text-gray-600 ">
        <p className=" ml-8 pt-8" >Holy Trinity College, Gbagada  Contact us </p>
        <p className="ml-8 pt-8 font-bold text-4xl " >Contact Us </p>
        <hr className="mt-4 ml-8 w-[80px] font-bold border-gray-600 border-4" />
        </div>
        <div className=" w-[90vw] lg:w-[30vw] flex flex-col justify-center items-center h-auto bg-gray-300 shadow-2xl mt-6  text-gray-600 rounded-md">
        
         <div className='flex flex-col mt-6 items-center space-y-2'>
         <div className="flex  ">
            <FaAddressCard className="mt-1" />
            <p className="ml-2">Atunrase Estate,Gbagada, Lagos</p>
          </div>
          <div className="flex  ">
            <FaPhone className="mt-1" />
            <p className="ml-2">090239876121, 070234567812</p>
          </div>
          <div className="flex   ">
          <FaEnvelope className="mt-1" />
            <p className="ml-2">info@holytrinitschool.com.ng</p>
          </div>
         </div>
          <div className="flex justify-center mt-10 items-center lg:w-[10vw]">
            <FaYoutube  className=" text-red-600  w-8 h-8" />
            <FaTwitter className="ml-2 w-8 h-8" />
            <FaFacebook className="ml-2 text-blue-500 w-8 h-8 " />
            <FaInstagram className="ml-2 text-pink-600 w-8 h-8" />
           </div>
           
        </div>
        
        <div className="mt-10 ml-10 text-gray-600">
          <h2 className="font-sm text-4xl">For Enquiries Only</h2>
          <hr className="mt-2 w-[80px] font-bold border-gray-600 border-4" />
          <div className=" w-[80vw] lg:w-[60vw] flex flex-col space-y-2 mt-4">
            <p >
             <b>School Director:</b> Mrs. Olaosebikan Fagunwa - 08123456789
            </p>
            <p >
             <b>Primary Principal:</b> Mr. Mustapha Mohammed - 07028769456
            </p>
          <p className=''>
             <b>Vice Principal College:</b> Mr. Adamu Yessuf - 09134567890
            </p>
          </div>
        </div>
       
        
      
        
        </>
    )
}
 export default Contact;