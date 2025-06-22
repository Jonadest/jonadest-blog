import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets';
import SinglePage from '../components/SinglePage';
import Comments from '../components/Comments';
import Loading from '../components/Loading';

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
    <Loading />
  );
};

export default Blog;
