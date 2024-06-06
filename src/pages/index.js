
export const runtime = "edge";

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HomeBody from '../components/home/Index.jsx';


export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main>
        <HomeBody />
      </main>

      <Footer />
    </div>
  );
}
