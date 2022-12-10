import React from "react";
import Logo from "../small-components/Logo";
import SearchInput from "../small-components/SearchInput";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const randomNum = Math.floor(Math.random() * 6) + 1;
  return (
    <>
      <div className=" p-5 px-5 sm:px-10 border-b border-primary-light bg-background/90 backdrop-blur-sm z-50  fixed flex justify-between left-0 items-center top-0 right-0  ">
        <Logo />

        <div className=" hidden lg:block">
          <SearchInput />
        </div>

        <div className=" lg:hidden text-3xl">
          {isMenuOpen ? (
            <IoClose onClick={() => setIsMenuOpen(false)} />
          ) : (
            <HiMenuAlt4 onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      <div
        className={` bg-primary/90 backdrop-blur-md transition-all pt-24 p-5 duration-500    z-20 fixed h-[100vh] rounded-b-xl  ${
          isMenuOpen ? "top-0" : "-top-full"
        }  w-screen `}
      >
        <SearchInput />

        <img
          className="  w-full sm:hidden  mt-5"
          src={`/images/loading/${randomNum}.gif`}
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
