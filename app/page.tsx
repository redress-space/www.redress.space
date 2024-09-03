
export const runtime = "experimental-edge";

import Navbar from '../src/components/Navbar.jsx'
import Footer from '../src/components/Footer.jsx'
import HomeBody from '../src/components/home/Index.jsx';


export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col p-6 transition-colors duration-[3s] md:justify-between md:px-20 md:py-14 '>
      <Navbar />
      
      <main>
        <HomeBody />
      </main>

      <Footer />
    </main>
  );
}
