import { Link} from "react-router-dom";
function Navbar(){
    return(
        
         <nav className="bg-gray-600 w-[100%]  lg:w-full h-20 text-white flex justify-between items-center pl-2 lg:pl-6 ">
          
            <ul className=" w-[45%] lg:w-[15%] flex justify-between ">
         <Link to= '/' className=" hover:text-blue-400">Home</Link>
         <Link to= 'about' className=" hover:text-blue-400 ">About</Link>
         <Link to= 'contact' className=" hover:text-blue-400">Contact</Link>
         </ul>
         <div>
         <Link to='signup' className=" mr-2 lg:mr-6 hover:text-blue-400">Signup</Link>
         </div>
        
            </nav>
    )
}
export default Navbar;