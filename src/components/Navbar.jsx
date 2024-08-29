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
    <div className="container py-2 px-28 pl-5 md:flex justify-between px-0">
      <h5 className="text-xl">Match shoppers with clohtes they need</h5>
    </div>
  );

};

export default Navbar;
