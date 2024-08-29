import React from 'react'
import Main from './Main'

import CenterContent from './CenterContent'
import ForBusiness from './ForBusiness'
import HowWork from './HowWork'
import Dress from './Dress'
import Gallary from './Gallary'
import WeBelive from './WeBelive'
import WorkSection from './WorkSection'
import Feture from './Feture'
import Contact from './Contact'
import ClientExpriance from './ClientExpriance'

const Index = () => {
  return (
    <div className='flex min-h-screen w-screen flex-col p-6 transition-colors duration-[3s] md:justify-between md:px-20 md:py-14 '>
      <Main/>
      {/* <Dress  /> */}
      {/* <Gallary/> */}
      {/* <WeBelive /> */}
      {/* <CenterContent/> */}
      {/* <WorkSection/> */}
      {/* <Feture /> */}
      {/* <ForBusiness  id="business-solution"/> */}
      {/* <HowWork/> */}
      {/* <ClientExpriance/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Index
