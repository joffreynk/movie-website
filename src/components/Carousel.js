import { FcNext, FcPrevious } from 'react-icons/fc';
import { useState, useEffect } from 'react';

import data from '../data/carousel';
import MoviePanel from './MoviePanel';

const Carousel = () => {
  const [range, setRange] = useState(0);
  const newData = data.slice(range, range + 4);
  const prev = () => {
    if (range + 4 === data.length - 1 || range === 0) {
      setRange(data.length - 5);
    } else setRange(((prevV) => prevV - 4));
  };


  const next = () => {
    if (range > (data.length - 5)) {
      setRange(0);
    } else setRange(((prevV) => prevV + 4));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [range]);

  return (
    <div className="flex justify-center items-center gap-3">
      <button type="button" onClick={prev}>
        {' '}
        <FcPrevious className="text-5xl " />
        {' '}
      </button>
      {newData.map((el, i) => <MoviePanel key={`${i * 3}`} el={el} />)}
      <button type="button" onClick={next}><FcNext className="text-5xl" /></button>
    </div>
  );
};

export default Carousel;
