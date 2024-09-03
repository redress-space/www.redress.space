import React from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const Toggle = ({toggleTheme, theme}) => {
  return (
    <div className='relative'>
      <a onClick={toggleTheme} className='button-toggle'>{ theme ==="dark"? <FaMoon/> : <FaSun/> }</a>
    </div>
  )
}

export default Toggle
