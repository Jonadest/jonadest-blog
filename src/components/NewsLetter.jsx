const NewsLetter = ({}) => {
  return (
    <div className='bg-gray-100 p-8 rounded-lg text-center my-10'>
      <h3 className='text-2xl font-bold'>Never Miss a Blog!</h3>
      <p className='text-lg text-gray-600 my-2'>
        Subscribe to our newsletter to stay updated on the latest blog posts.
      </p>
      <form className='flex justify-center items-center gap-2 my-6'>
        <input type='email' placeholder='Enter your email' className='input' />
        <button type='submit' className='btn'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
