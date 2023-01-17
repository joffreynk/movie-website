import { BiSearch, BiUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => (
  <div className="flex justify-between items-center fixed text-[#cac9c9] top-5 left-10 right-10 text-2xl font-semibold">
    <h1>
      Movie
      <span className="text-[#f139df] ">World</span>
    </h1>

    <div className="flex items-center ">
      <input type="text" className=" bg-[#4b4b4d] outline-none border-0" />
      <BiSearch className="-mx-7 cursor-pointer" />
    </div>

    <div className="flex items-center ">
      <BiUser className="text-[#f139df] cursor-pointer" />
      <GiHamburgerMenu className="cursor-pointer" />
    </div>

  </div>
);

export default Header;
