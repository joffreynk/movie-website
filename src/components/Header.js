import { BiSearch, BiUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => (

  <div className="flex justify-between items-center m-x-3 p-l-10 p-r-10">
    <h1>
      Movie
      <span>world</span>
    </h1>

    <div>
      <input type="text" />
      <BiSearch />
    </div>

    <div>
      <BiUser />
      <GiHamburgerMenu />
    </div>

  </div>
);

export default Header;
