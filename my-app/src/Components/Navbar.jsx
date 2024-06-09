import { Link} from "react-router-dom";
function Navbar(){
    return(
        
         <nav className="bg-gray-600 w-[100%]  lg:w-full h-20 text-white flex justify-between ">
            <ul className="flex justify-between mt-6 ml-6  space-x-3 ">
         <Link to= '/' className=" hover:text-blue-400">Home</Link>
         <Link to= 'about' className=" hover:text-blue-400 ">About</Link>
         <Link to= 'contact' className=" hover:text-blue-400">Contact</Link>
         </ul>
         <Link to='signup' className="mr-6 mt-6 hover:text-blue-400">Signup</Link>
            </nav>
    )
}
export default Navbar;