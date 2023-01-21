import { BiSearch, BiUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => (
  <div className="flex justify-between items-center bg-[#1f1f1f] fixed text-[#cac9c9] top-0 left-0 right-0 h-28 px-[10%] text-2xl font-semibold z-50">
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
