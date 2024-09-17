import React from 'react';
import {FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaAddressCard  } from 'react-icons/fa';
function Contact(){
    return(
        <>
         <div className='w-full h-[200px] bg-gray-300 text-gray-600 flex flex-col justify-center  pl-4 '>
        <p className='pt-4'  >Holy Trinity School, Gbagada  Contact us </p>
        <p className='font-bold text-4xl' >Contact Us </p>
        <hr className=' mt-2 w-[80px] font-bold border-gray-600 border-4' />
        </div> 

        <div className='w-[80vw] lg:w-[30vw] h-[300px] bg-gray-300 shadow-2xl mt-4 flex flex-col justify-center ml-4 pl-4  text-gray-600 rounded-md'>
        
        <div className='flex '>
          <FaAddressCard className='mt-1' />
          <p className='ml-2'>Atunrase Estate,Gbagada, Lagos</p>
        </div>
        <div className='flex mt-4'>
          <FaPhone className='mt-1' />
          <p className='ml-2'>090239876121, 070234567812</p>
        </div>
        <div className='flex mt-4'>
        <FaEnvelope className='mt-1' />
          <p className='ml-2'>info@holytrinitschool.com.ng</p>
        </div>
        <div className=' w-[20vw] lg:w-[10vw] flex justify-between items-center mt-20'>
          <FaYoutube  className=' text-red-600 w-4 lg:w-6 h-4 lg:h-6' />
          <FaTwitter className='w-4 lg:w-6 h-4 lg:h-6' />
          <FaFacebook className=' text-blue-500 w-4 lg:w-6 h-4 lg:h-6 ' />
          <FaInstagram className=' text-pink-600 w-4 lg:w-6 h-4 lg:h-6' />
         </div>
         
      </div>

      <div className='ml-4 w-[90vw] lg:w-[35vw] flex flex-col justify-center mt-6 text-gray-600'>
          <div>
          <h2 className=' font-sm text-2xl lg:text-4xl'>For Enquiries Only</h2>
          <hr className='mt-2 w-[80px] font-bold border-gray-600 border-4' />
          </div>
          
          <div className=''>
            <p className='mt-8'>
             <b>School Director:</b> Mrs. Olaosebikan Fagunwa - 08123456789
            </p>
            <p className='mt-8'>
             <b>Primary Principal:</b> Mr. Mustapha Mohammed - 07028769456
            </p>
            <p className='mt-8'>
             <b>Vice Principal College:</b> Mr. Adamu Yessuf - 09134567890
            </p>
          </div>
        </div>
       
        
        {/* <div className='mt-10 ml-10 text-gray-600'>
          <h2 className=' font-sm text-4xl'>For Enquiries Only</h2>
          <hr className='mt-2 w-[80px] font-bold border-gray-600 border-4' />
          <div className='w-[60vw]'>
            <p className='mt-8'>
             <b>School Director:</b> Mrs. Olaosebikan Fagunwa - 08123456789
            </p>
            <p className='mt-8'>
             <b>Primary Principal:</b> Mr. Mustapha Mohammed - 07028769456
            </p>
            <p className='mt-8'>
             <b>Vice Principal College:</b> Mr. Adamu Yessuf - 09134567890
            </p>
          </div>
        </div> */}
        
        </>
    )
}
 export default Contact;