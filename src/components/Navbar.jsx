import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import ThemeController from './ThemeController';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center py-3  px-8 shadow-lg w-full mx-auto sticky top-0 left-0 z-50 bg-base-100'>
      <button
        onClick={() => navigate('/')}
        className='flex lg:hidden font-bold uppercase tracking-wider btn btn-ghost text-2xl'>
        {' '}
        J
      </button>
      <button
        onClick={() => navigate('/')}
        className='hidden lg:flex font-bold uppercase tracking-wider btn btn-ghost'>
        {' '}
        Jonadest
      </button>
      <ThemeController />

      <button
        onClick={() => navigate('/admin')}
        className='hidden lg:flex items-center gap-2 rounded-full text-smpx-4 py-1 cursor-pointer'>
        Login <img src={assets.arrow} className='w-3' alt='arrow' />
      </button>
      <button
        onClick={() => navigate('/admin')}
        className='flex lg:hidden  items-center gap-2 rounded-full text-sm   cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
