import CategoryCard from './CategoryCard';

const Hero = () => {
  return (
    <div className=' mx-auto w-[90%] lg:w-full '>
      <div className='details lg:px-[350px]'>
        <h1 className='text-[70px] font-semibold pt-6  leading-18 text-shadow-lg'>
          Your own <span className='text-[#5044E5]'>blogging</span> <br />
          platform.
        </h1>
        <p className='text-[18px]  pt-6 '>
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it’s one word or a thousand, your story
          starts right here.
        </p>
        <div className='flex justify-center items-center gap-2 my-6'>
          <input type='search' placeholder='Search blogs' className='input' />
          <button className='btn'>Search</button>
        </div>

        <ul className='flex justify-center items-center  mx-auto  gap-y-2 my-6  lg:gap-x-3  flex-wrap'>
          <li className='btn rounded-full sm:text-xs lg:text-[14px]'>All</li>
          <li className='btn btn-ghost rounded-full sm:text-xs lg:text-[14px]'>
            Technology
          </li>
          <li className='btn btn-ghost rounded-full sm:text-xs lg:text-[14px]'>
            Startup
          </li>
          <li className='btn btn-ghost rounded-full sm:text-xs lg:text-[14px]'>
            Lifestyle
          </li>
          <li className='btn btn-ghost rounded-full sm:text-xs lg:text-[14px]'>
            Finance
          </li>
        </ul>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 lg:px-[150px] gap-8  pb-30'>
        <CategoryCard />
      </div>
    </div>
  );
};

export default Hero;
