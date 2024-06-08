import React from 'react';
import {FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaAddressCard  } from 'react-icons/fa';
function Contact(){
    return(
        <>
        <div className={`pt-[80px]`}>
       <div className={`w-full h-[200px] bg-gray-300 text-gray-600 `}>
        <p className={` ml-8 pt-8 `} >Holy Trinity School, Gbagada  Contact us </p>
        <p className={` ml-8 pt-8 font-bold text-4xl `} >Contact Us </p>
        <hr className={`mt-4 ml-8 w-[80px] font-bold border-gray-600 border-4`} />
        </div>
        <div className={` w-full lg:w-[30vw] h-auto bg-gray-300 shadow-2xl mt-8 ml-2 lg:ml-8 text-gray-600 pt-10 pl-4 lg:pl-12 rounded-md`}>
        
          <div className={`flex  `}>
            <FaAddressCard className={`mt-1`} />
            <p className={`ml-2`}>Atunrase Estate,Gbagada, Lagos</p>
          </div>
          <div className={` flex mt-4 `}>
            <FaPhone className={`mt-1`} />
            <p className={`ml-2`}>090239876121, 070234567812</p>
          </div>
          <div className={`flex  mt-4 `}>
          <FaEnvelope className={`mt-1`} />
            <p className={`ml-2`}>info@holytrinitschool.com.ng</p>
          </div>
          <div className={`flex ml-10 mt-[100px] w-[50vw]`}>
            <FaYoutube  className={` text-red-600 w-6 h-6 `} />
            <FaTwitter className={`ml-2 w-6 h-6 `} />
            <FaFacebook className={`ml-2 text-blue-500 w-6 h-6 `} />
            <FaInstagram className={`ml-2 text-pink-600 w-6 h-6 `} />
           </div>
           
        </div>
        
        <div className={`mt-10 ml-10 text-gray-600 `}>
          <h2 className={` font-sm text-4xl`}>For Enquiries Only</h2>
          <hr className={`mt-2 w-[80px] font-bold border-gray-600 border-4`} />
          <div className={`w-[60vw]`}>
            <p className={`mt-8 `}>
             <b>School Director:</b> Mrs. Olaosebikan Fagunwa - 08123456789
            </p>
            <p className={`mt-8 `}>
             <b>Primary Principal:</b> Mr. Mustapha Mohammed - 07028769456
            </p>
            <p className={`mt-8 `}>
             <b>Vice Principal College:</b> Mr. Adamu Yessuf - 09134567890
            </p>
          </div>
        </div>
        </div>
        </>
    )
}
 export default Contact;