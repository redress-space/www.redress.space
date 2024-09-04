
export const runtime = "edge";

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HomeBody from '../components/home/Index.jsx';

export default function Index() {
  return (
    <div className='flex flex-col md:justify-between h-full'>
      <Navbar />
      <HomeBody />
      <Footer />
    </div>
  );
}
