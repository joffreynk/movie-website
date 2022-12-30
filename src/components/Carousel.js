import data from '../data/carousel';
import MoviePanel from './MoviePanel';

const Carousel = () => (
  data.map((el, i) => <MoviePanel key={i} el={el} />)
);

export default Carousel;
