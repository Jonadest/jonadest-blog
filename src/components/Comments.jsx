import { useEffect, useState } from 'react';
import { assets, comments_data } from '../assets/assets';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);

  // Load comments initially
  useEffect(() => {
    const filteredComments = comments_data.filter(
      (comment) => comment.blog._id === blogId
    );
    setComments(filteredComments);
  }, [blogId]);

  // Handle new comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const content = e.target[1].value.trim();

    if (!name || !content) {
      alert('Please fill in all fields');
      return;
    }

    const newComment = {
      _id: Math.random().toString(36).substring(2, 15),
      name,
      content,
      createdAt: new Date().toISOString(),
      blog: { _id: blogId },
    };

    // Update both the global array and local state
    comments_data.push(newComment);
    setComments((prev) => [...prev, newComment]);
    e.target.reset();
    alert('Comment added successfully!');
  };

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <p className='pb-6'>Comments ({comments.length})</p>

      {/* Comment List */}
      <div className='flex flex-col gap-4 mb-6'>
        {comments.map((item) => (
          <div key={item._id} className='card p-4 bg-base-100/50'>
            <div className='flex justify-start items-start gap-3'>
              <img src={assets.user_icon} alt='avatar' className='w-6' />
              <div className='flex flex-col w-full'>
                <div className='flex justify-between items-start gap-1 w-full'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-xs text-gray-500'>
                    {dayjs(item.createdAt).fromNow()}
                  </p>
                </div>
                <p className='text-sm'>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <p>
        <strong>Add your comment</strong>
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col items-start mt-3'>
        <input type='text' className='input mb-3 w-full' placeholder='Name' />
        <textarea
          name='Comment'
          placeholder='Comment'
          className='input h-48 w-full p-2 mb-3'></textarea>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>

      {/* Share Section */}
      <div className='flex flex-col my-6'>
        <p>
          <strong>Share this article on social media</strong>
        </p>
        <div className='flex gap-4 my-3'>
          <img
            className='w-12 cursor-pointer'
            src={assets.facebook_icon}
            alt='Facebook'
          />
          <img
            className='w-12 cursor-pointer'
            src={assets.twitter_icon}
            alt='Twitter'
          />
          <img
            className='w-12 cursor-pointer'
            src={assets.googleplus_icon}
            alt='Google+'
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
