import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
<div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Tech /> */}
      {/* <Works /> */}
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}
