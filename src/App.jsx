import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { assets } from './assets/assets';
const App = ({}) => {
  return (
    <div
      className='min-h-screen w-full'
      style={{
        backgroundImage: `url(${assets.gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
