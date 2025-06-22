import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import DOMPurify from 'dompurify';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const SinglePage = ({ props }) => {
  const date = dayjs(props.createdAt);
  const formattedDate = date.format('MMMM D, YYYY');
  const formattedTime = date.format('h:mm A');
  const relativeTimeStr = date.fromNow();
  const utcTime = dayjs.utc(props.createdAt).format('HH:mm [UTC]');

  return (
    <div className='max-w-3xl mx-auto p-6 mt-10'>
      <header className='text-center mb-6 lg:px-[30px]'>
        <p className='text-xs text-gray-500'>
          Published on {formattedDate} at {formattedTime} ({relativeTimeStr}) |{' '}
          {utcTime}
        </p>
        <h1
          className='text-[45px] font-bold leading-14 py-6'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.title),
          }}></h1>
        <p
          className='text-[18px] text-center'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.subTitle),
          }}></p>
        <p className='text-[10px] lg:text-[12px] py-1 px-2 my-3 border-[1px] rounded-md inline-block'>
          Ifeanyi Destiny
        </p>
      </header>
      <div className='cover-image'>
        <img
          src={props.image}
          alt='blog image'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div
        className='blog-content py-6'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.description),
        }}
      />
    </div>
  );
};

export default SinglePage;
