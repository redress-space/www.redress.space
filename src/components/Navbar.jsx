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
  /*     const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const menuRef = useRef(null);
    const searchRef = useRef(null);

    const toggleMenu = () => {
        setShow(!show);
    };

    const handleClose = () => {
        setShow(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
 */
  /*     useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowSearch(false);
        }
    };

    const handleScroll = () => {
        setShowSearch(false);
    }; */

  return (
    <>
      {/* <nav className='md:px-11 lg:px-0 xl:px-9'>
                <NavLink to="/re-dress" className='mx-auto md:mr-0'>
                    <img className='company-logo' src={ theme ==="dark"? logoWhite : logoBlack } alt="Company Logo" />
                </NavLink>
                <div>
                    <ul id='navbar' className={show ? '#navbar active' : "#navbar"}>
                    <ul id='navbar' className=''>
                      
                       
                        <li className='padding-mobile-nav text-center d-lg-none  ml-5'><NavLink to='/'><img className='company-logo' src={ theme ==="dark"? logoWhite : logoBlack } alt="Company Logo " /></NavLink></li>
                        <li className='active font-alexandria' ><NavLink to='/re-dress'>AI App</NavLink></li>
                        <li  className='font-alexandria' ><NavLink to='/re-dress'><a href=""></a>Business solution</NavLink> </li>
                        <li className='font-alexandria ' ><NavLink > <p onClick={toggleTheme} className='flex justify-center items-end mb-0'>{ theme ==="dark"? <FaMoon/> : <FaSun/> }</p></NavLink> </li>
              
                      
                     
                    </ul>
                </div>
               
            </nav> */}
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
