import React from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './components/Movies';

const App = () => (
  <div className="relative font-opensans  bg-[#1f1f1f] text-white capitalize">
    <div className="">
      <Header />
    </div>

    <div className="pt-44  bg-[#3f3f3f]">
      <Carousel />
    </div>
    <div className="flex justify-center items-center my-10 ">
      <button type='button' className="capitalize bg-gradient-to-r from-[#ef4d88] to-[#4e51ff] px-16 py-4 rounded-lg text-3xl">Subscription</button>
    </div>
    <div className="mt-10 mx-[5%]">
      <Movies />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
