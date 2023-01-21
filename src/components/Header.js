import { BiUser } from 'react-icons/bi';
import { SocialIcon } from 'react-social-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => (
  <div className="flex justify-between items-center bg-[#1f1f1f] fixed text-[#cac9c9] top-0 left-0 right-0 h-28 px-[10%] text-2xl font-semibold z-50">
    <h1>
      Movie
      <span className="text-[#f139df] ">World</span>
    </h1>

    <div className="flex justify-center items-center">

      <SocialIcon
        target="_blank"
        url="https://www.linkedin.com/in/joffreynk/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        target="_blank"
        url="https://twitter.com/joffreynk"
        fgColor="gray"
        bgColor="transparent"
        // className={`hover:${styles.hovering}`}
      />
      <SocialIcon
        target="_blank"
        url="https://github.com/JoffreyNK"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        target="_blank"
        url="https://www.facebook.com/joffreynk7"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        target="_blank"
        url="https://angel.co/u/joffreynk/"
        fgColor="gray"
        bgColor="transparent"
      />

    </div>

    <div className="flex items-center ">
      <BiUser className="text-[#f139df] cursor-pointer" />
      <GiHamburgerMenu className="cursor-pointer" />
    </div>

  </div>
);

export default Header;
