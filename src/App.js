import React from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Movies from './components/Movies';
import Premium from './components/Premium';

const App = () => (
  <div className="relative font-opensans " style={{ height: '200rem' }}>
    <div className="fixed top-0 right-0 left-0 h-28  bg-[#1f1f1f]">
      <Header />
    </div>

    <div className="mt-36">
      <Carousel />
    </div>
    <div className='flex justify-center items-center my-10'>
      <button >Subscription</button>
    </div>
    <div className="mt-10 mx-[5%]">
      <div >
        <Premium />
      </div>
      <div >
        <Movies />
      </div>
    </div>
  </div>
);

export default App;
