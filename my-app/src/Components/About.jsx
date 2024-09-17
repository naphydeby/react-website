function About() {
  return (
    <>
      <div>
        <img src="./images/school.jpeg" className="w-full h-auto pt-12" />
        <div className='mt-[-60px] lg:ml-20 w-full'>
          <p className='font-bold lg:text-2xl text-gray-400'>About Us</p>
        </div>
      </div>
      <div className='  flex flex-col lg:flex-row justify-evenly items-center '>
        <div className=' text-gray-600 '>
          <h2 className='font-sm text-2xl lg:text-4xl mt-10 lg:mt-0'>Introduction</h2>
          <hr className='mt-2 w-[80px] font-bold border-gray-600 border-4' />
          <div className=" w-[80vw] lg:w-[60vw]" >
            <p className='mt-8 '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores vitae vel consequatur adipisci recusandae fugiat labore
              fuga omnis mollitia saepe temporibus dolor exercitationem, ex,
              aperiam accusantium placeat, molestiae libero voluptatem! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ea magni amet
              ratione sapiente ducimus in quis laborum rerum? Explicabo velit
              repellat fuga, reiciendis esse accusamus sint aspernatur odit eius
              voluptatum.
            </p>
          </div>
        </div>
        <div className='mt-4 lg:mt-[150px] lg:mr-4 '>
          <h2 className='text-gray-600 font-sm text-2xl lg:text-4xl'>Mission</h2>
          <hr className='mt-2 w-[80px] font-bold border-gray-600 border-4' />
          <div
            className='mt-10 w-[80vw] lg:w-[30vw] h-auto  border-gray-600 border-4 text-gray-600'
          >
            <p className='mt-2 ml-4 font-bold'>Our Vision</p>
            <hr className='mt-4 w-full font-bold border-gray-600 border-2' />
            <p className='m-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic qui,
              dicta nostrum beatae porro placeat quae iusto eligendi sapiente
              earum consequuntur magnam recusandae quidem itaque perspiciatis
              sit neque est.
            </p>
          </div>
          <div
            className='mt-2  w-[80vw] lg:w-[30vw] h-auto  border-gray-600 border-4 text-gray-600'
          >
            <p className='mt-2 ml-4 font-bold'>Our Mission Statement</p>
          </div>
        </div>
      </div>
      <div className='mt-10 ml-10 text-gray-600'>
        <h2 className='font-sm text-2xl lg:text-4xl'>Membership/Partnership</h2>
        <hr className='mt-2 w-[80px] font-bold border-gray-600 border-4' />
        <div className='flex mt-12'>
          <div className='w-[30vw] border-8 border-gray-600'>
            <img src="./images/logo1.png" />
          </div>
          <div className="w-[30vw] border-8 border-gray-600 ml-8">
            
            <img src="./images/logo2.png" />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
