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
    <>
      <Main/>
      <Dress  />
      <Gallary/>
      <WeBelive />
      <CenterContent/>
      <WorkSection/>
      <Feture />
      <ForBusiness  id="business-solution"/>
      <HowWork/>
      <ClientExpriance/>
      <Contact/>

    </>
  )
}

export default Index
