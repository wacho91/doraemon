import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  })

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  )
}