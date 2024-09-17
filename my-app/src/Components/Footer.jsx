import { Link} from "react-router-dom";
 function Footer(){
    return(
        <>
        <div className="bg-gray-600 w-full lg:h-[250px] mt-6 flex flex-col lg:flex-row justify-center items-center lg:justify-between text-white  ">
            <div className=" mt-4 lg:mt-0 lg:ml-6">
                <p className=" text-4xl lg:text-2xl  "> Information For</p>
               <div className="text-center lg:text-start pt-4" >
               <Link to= '/ CurrentStudent' className="hover:text-white"> Current Student</Link><br />
                <Link to= '/ Alumni' className="hover:text-white"> Alumni</Link><br />
                <Link to= '/ Families' className="hover:text-white"> Families</Link> <br />
                <Link to= '/ FacultyStaff' className="hover:text-white"> Faculty and Staff</Link><br />
                <Link to= '/ Parners' className="hover:text-white"> Partners</Link><br />
                <Link to= '/ Media' className="hover:text-white"> Media</Link>
               </div>
               
               
            </div>
            <div className="mt-4 lg:mt-0" >
                <p className="text-4xl lg:text-2xl"> Quick Links</p>
               <div className="text-center lg:text-start pt-4" >
               <Link to= '/ Academics' className="hover:text-white"> Academic Calendar</Link><br />
                <Link to= '/ Canvas' className="hover:text-white"> Canvas</Link><br />
                <Link to= '/ Jobs' className="hover:text-white"> Jobs</Link><br />
                <Link to= '/ BookShop' className="hover:text-white"> Book Shop</Link><br />
                <Link to= '/ Seminary' className="hover:text-white"> Seminary</Link><br />
                <Link to= '/ Library' className="hover:text-white"> Library</Link>
 
               </div>
                             
            </div>
            <div className="lg:mr-6 mt-4 lg:-mt-10">
                <p className="text-4xl lg:text-2xl"> Contact</p>
               <div className="text-center lg:text-start pt-4" >
               <Link to= '/ FinancialAid' className="hover:text-white "> Financial Aid</Link><br />
                <Link to= '/ HumanResources' className="hover:text-white"> Human Resources</Link><br />
                <Link to= '/ IT' className="hover:text-white"> IT</Link><br />
                <Link to= '/ Directory' className="hover:text-white"> Directory</Link>
               </div>
               
             
            </div>

        </div>
        </>
    )
 }
 export default Footer;