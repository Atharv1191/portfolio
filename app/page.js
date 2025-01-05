'use client'
import About from "./componants/About";
import Header from "./componants/Header";
import Navbar from "./componants/Navbar";
import Services from "./componants/Services";
import Work from "./componants/Work";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <About/>
   <Services/>
   <Work/>
   <Contact/>
   <Footer/>
   </>
  );
}
