import { blog_data, blogCategories } from '../assets/assets';
import { useState } from 'react';
import BlogCard from './BlogCard';

const Bloglist = ({}) => {
  const [menu, setMenu] = useState('All');
  return (
    <div>
      <ul className='flex justify-center items-center  mx-auto  gap-y-2 my-6  lg:gap-x-3  flex-wrap'>
        {blogCategories.map((list, index) => (
          <>
            <li
              onClick={() => setMenu(list)}
              key={index}
              className={`cursor-pointer  ${
                menu === list && 'btn px-4 py-0'
              } rounded-full mx-2 text-xs lg:text-[14px] relative`}>
              {list}
            </li>
          </>
        ))}
      </ul>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:px-[150px] gap-2 lg:gap-4'>
        {blog_data
          .filter((blog) => (menu === 'All' ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
