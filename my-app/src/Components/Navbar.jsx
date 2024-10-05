
import React from 'react'
import {  NavLink} from "react-router-dom";
const Navbar = () => {
   const navLinkStyle=({isActive})=>{
      return{
         fontWeight: isActive ? "bold" : "normal",
         color: isActive ? "blue" : "white",
         textDecoration: isActive ? "none" : "underline"
      }

   }
  return (
    <div>
 <nav className="bg-gray-600 w-[100%]  lg:w-full h-20 text-white flex justify-between items-center fixed">
            <ul className="flex justify-between w-[50%] lg:w-[20%] ml-6 ">
         <NavLink to= '/' style={navLinkStyle} >Home</NavLink>
         <NavLink to= 'about'style={navLinkStyle} >About</NavLink>
         <NavLink to= 'contact' style={navLinkStyle} >Contact</NavLink>
         </ul>
         <NavLink to='signup'className="mr-6 "style={navLinkStyle}>Signup</NavLink>
</nav>
    </div>
  )
}

export default Navbar






// import { Link} from "react-router-dom";
// function Navbar(){
//     return(
        
//          <nav className="bg-gray-600 w-[100%]   h-20 text-white flex justify-between items-center pl-2 lg:pl-6 ">
          
//             <ul className=" w-[45%] lg:w-[15%] flex justify-between ">
//          <Link to= '/' className=" hover:text-blue-400">Home</Link>
//          <Link to= 'about' className=" hover:text-blue-400 ">About</Link>
//          <Link to= 'contact' className=" hover:text-blue-400">Contact</Link>
//          </ul>
//          <div>
//          <Link to='signup' className=" mr-2 lg:mr-6 hover:text-blue-400">Signup</Link>
//          </div>
        
//             </nav>
//     )
// }
// export default Navbar;