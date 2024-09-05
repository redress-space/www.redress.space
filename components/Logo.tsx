import React from 'react'
import Image from 'next/image';

import logo from "@/public/logo.svg";

const Logo = () => {
  return (<>
    <div className=''>
        <Image
        priority
        src={logo}
        // height={32}
        // width={32}
        alt="Redress"
        />
    </div>
  </>);

}

export default Logo;
