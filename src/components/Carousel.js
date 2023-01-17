import {FcNext, FcPrevious } from 'react-icons/fc'
import { useState } from 'react';

import data from '../data/carousel';
import MoviePanel from './MoviePanel';

const Carousel = () => {
  const [range, setRange] = useState(0);
  const newData = data.slice(range, range + 3);
  const prev = () => {
    if (range + 3 === data.length - 1 || range === 0) {
      setRange(data.length - 4);
    } else setRange(((prevV) => prevV - 3));
  };

  const next = () => {
    if (range > (data.length - 4)) {
      setRange(0);
    } else setRange(((prevV) => prevV + 3));
  };

  return (
    <div className="flex mt-72">
      <button type="button" onClick={prev}> <FcPrevious/> </button>
      {newData.map((el, i) => <MoviePanel key={`${i * 3}`} el={el} />)}
      <button type="button" onClick={next}><FcNext/></button>
    </div>
  )
};

export default Carousel;
