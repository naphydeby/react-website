import react from 'react'
import student from '../assets/images/students-img1.jpg'


function Home(){
    return(
        <>

        <div className='w-[100%] flex flex-col justify-center items-center  ' >
          {/* 1st div */}
          <div>
          <h1 className=" lg:text-6xl mt-20  text-blue-400 animate-pulse ">WELCOME TO HOLY TRINITY COLLEGE</h1>
          <p className=" text-center mt-2  text-gray-600"> Lorem ipsum dolor sit .</p>
          </div>
        {/* 2nd div */}
       <div className='w-[95%]'>
       <p className="text-gray-600 mt-4 " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam omnis itaque, molestiae inventore necessitatibus, exercitationem delectus quaerat quas nemo adipisci voluptatem nulla odit harum libero reprehenderit, repudiandae deleniti rerum quod eveniet repellat quos voluptates esse cupiditate consectetur? Corrupti eligendi saepe, dolore, a impedit, facilis deserunt nulla quod rerum enim dolores ipsum quidem aperiam itaque? Omnis eligendi voluptatum architecto magni officiis inventore natus cum autem! Quibusdam quisquam adipisci minus saepe tempora aut amet consequuntur, praesentium quos iusto. In, iusto illo. Minima maxime natus quod, aliquam vitae similique pariatur error. Dolore nulla libero dolorem, rerum provident quo amet est sit praesentium itaque.</p>
         {/* img div */}
         <div className=' '>
         <img src={student} className='w-[100%]'  />
         
         </div>
       </div>
       {/* last div */}
       <div className='w-[95%]'>
       <h1 className=" lg:text-4xl text-center text-blue-400 ">AN IMPORTANT NOTE ABOUT COVID-19 </h1>
       <p className="text-gray-600 mt-4 " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam omnis itaque, molestiae inventore necessitatibus, exercitationem delectus quaerat quas nemo adipisci voluptatem nulla odit harum libero reprehenderit, repudiandae deleniti rerum quod eveniet repellat quos voluptates esse cupiditate consectetur? Corrupti eligendi saepe, dolore, a impedit, facilis deserunt nulla quod rerum enim dolores ipsum quidem aperiam itaque? Omnis eligendi voluptatum architecto magni officiis inventore natus cum autem! Quibusdam quisquam adipisci minus saepe tempora aut amet consequuntur, praesentium quos iusto. In, iusto illo. Minima maxime natus quod, aliquam vitae similique pariatur error. Dolore nulla libero dolorem, rerum provident quo amet est sit praesentium itaque.</p>
       </div>
      </div>
       
         
        </>
    )
}

export default Home;
































// function Home(){
//     return(
//         <>
        
//           <div className="w-full flex flex-col justify-center items-center pt-6" >
//           <h1 className="   lg:text-6xl    text-blue-400 animate-pulse ">WELCOME TO HOLY TRINITY SCHOOL</h1>
//           <p className=" mt-4 text-gray-600"> Lorem ipsum dolor sit .</p>
//           </div>
        
//        <div className="w-full pt-4 flex justify-center items-center ">
        
//         <p className="text-gray-600 " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam omnis itaque, molestiae inventore necessitatibus, exercitationem delectus quaerat quas nemo adipisci voluptatem nulla odit harum libero reprehenderit, repudiandae deleniti rerum quod eveniet repellat quos voluptates esse cupiditate consectetur? Corrupti eligendi saepe, dolore, a impedit, facilis deserunt nulla quod rerum enim dolores ipsum quidem aperiam itaque? Omnis eligendi voluptatum architecto magni officiis inventore natus cum autem! Quibusdam quisquam adipisci minus saepe tempora aut amet consequuntur, praesentium quos iusto. In, iusto illo. Minima maxime natus quod, aliquam vitae similique pariatur error. Dolore nulla libero dolorem, rerum provident quo amet est sit praesentium itaque.</p>
        
//         </div>
//         <img src="./images/stds.jpeg" className={`w-full h-auto`} />
//         <div className={`w-full text-center`}>
//         <h1 className=" lg:text-4xl mt-4 text-blue-400 ">AN IMPORTANT NOTE ABOUT COVID-19 </h1>
//         </div>
//         <div  className="w-full text-center">
//         <p className="text-gray-600 mt-6" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam omnis itaque, molestiae inventore necessitatibus, exercitationem delectus quaerat quas nemo adipisci voluptatem nulla odit harum libero reprehenderit, repudiandae deleniti rerum quod eveniet repellat quos voluptates esse cupiditate consectetur? Corrupti eligendi saepe, dolore, a impedit, facilis deserunt nulla quod rerum enim dolores ipsum quidem aperiam itaque? Omnis eligendi voluptatum architecto magni officiis inventore natus cum autem! Quibusdam quisquam adipisci minus saepe tempora aut amet consequuntur, praesentium quos iusto. In, iusto illo. Minima maxime natus quod, aliquam vitae similique pariatur error. Dolore nulla libero dolorem, rerum provident quo amet est sit praesentium itaque.</p>
//         </div>
//         </>
//     )
// }

// export default Home;