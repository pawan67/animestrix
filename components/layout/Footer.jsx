import React from "react";
import Logo from "../small-components/Logo";
import { BiUpArrowAlt } from "react-icons/bi";
function Footer() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className=" mt-14 border-t border-primary-light p-5 sm:p-10">
      <div
        onClick={goToTop}
        className=" cursor-pointer float-right bg-primary-light p-3 text-2xl"
      >
        <BiUpArrowAlt />
      </div>
      <div className=" flex space-x-4 items-center">
        <div>
          <Logo />
          <p>minimal anime streaming site.</p>
          <p className=" font-extralight ">
            made by
            <a
              className="  underline ml-1 "
              target="_blank"
              href="https://pawan67.vercel.app"
              rel="noreferrer"
            >
              pawan67
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
