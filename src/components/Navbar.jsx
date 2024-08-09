import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link'

// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
// import logo from "../assets/nav-logo.svg";
// import logoWhite from "../assets/nav-logo.svg";
// import logoBlack from "../assets/nav-logo_black.svg";
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa6";

// import DarkModeToggle from '../components/darkmode/index'
const Navbar = ({ toggleTheme, theme }) => {
  
  return (
    <>
      <div className="container">
        <nav className=" py-5 md:flex justify-between px-0">
          <Link
            href="/"
            className="justify-content-md-start active d-flex justify-content-center md:mr-0 w-100"
          >
            <img
              className="flex justify-center md:justify-start "
              src={theme === "dark" ? '/assets/nav-logo.svg' : '/assets/nav-logo_black.svg'}
              alt="Company Logo"
            />
          </Link>
          <div className=" hidden md:block">
            <ul className="flex gap-x-10 p-0 mb-0 justify-center items-center navbar-ul">
              <li className="active font-alexandria font-normal text-[23px] text-nowrap cursor-pointer">
                <Link href="/">AI App</Link>
              </li>
              <li className="font-alexandria font-normal text-[23px] text-nowrap cursor-pointer">
                <a href="#for-business">
                Business solution
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
