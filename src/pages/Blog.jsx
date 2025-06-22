import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets';
import SinglePage from '../components/SinglePage';
import Comments from '../components/Comments';

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div>
      <SinglePage props={data} />
      <Comments blogId={data._id} />
    </div>
  ) : (
    <div className='flex justify-center items-center h-screen'>
      <p className='text-2xl'>Loading...</p>
    </div>
  );
};

export default Blog;
