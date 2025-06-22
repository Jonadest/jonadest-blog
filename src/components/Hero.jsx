import CategoryCard from './CategoryCard';
import Bloglist from './Bloglist';
import NewsLetter from './NewsLetter';

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
        <form
          action='#'
          className='flex justify-center items-center gap-2 my-6'>
          <input type='search' placeholder='Search blogs' className='input' />
          <button className='btn'>Search</button>
        </form>
      </div>
      <Bloglist />
      <NewsLetter />
    </div>
  );
};

export default Hero;
