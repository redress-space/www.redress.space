
export const runtime = "edge";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeBody from '../components/home/Index';

export default function Index() {
  return (
    <div className='flex flex-col md:justify-start h-full relative'>
      <Navbar />
      <HomeBody />
      <Footer />
    </div>
  );
}
