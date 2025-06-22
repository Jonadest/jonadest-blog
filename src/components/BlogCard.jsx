import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, subTitle, category, image, _id } = blog;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='  w-[300px] lg:max-w-[220px] mx-auto rounded-lg  shadow-lg my-3 cate-card'>
      <div
        className='h-[130px] w-full rounded-tr-lg rounded-tl-lg'
        style={{
          backgroundImage: `url(${image})`,
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      <div className='flex flex-col items-start py-6  mx-6 '>
        <button className='btn btn-xs tracking-wider mb-3 '>{category}</button>
        <p className='text-left text-[16px] font-semibold'>{title}</p>
        <p className='text-left text-[12px] py-2'>{subTitle}</p>
      </div>
    </div>
  );
};

export default BlogCard;
