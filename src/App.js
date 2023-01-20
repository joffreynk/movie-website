import React from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Movies from './components/Movies';

const App = () => (
  <div className="relative font-opensans " style={{ height: '200rem' }}>
    <div className="fixed top-0 right-0 left-0 h-28  bg-[#1f1f1f]">
      <Header />
    </div>

    <div className="mt-36">
      <Carousel />
    </div>
    <div className="mt-10">
      <Movies />
    </div>
  </div>
);

export default App;
