import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import JenisOlahraga from './components/DataCovid/DataCovid';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const olahragaRef = useRef(null);
  const manfaatRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (searchTerm.toLowerCase().includes("manfaat")) {
      manfaatRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (
      searchTerm.toLowerCase().includes("jenis") ||
      searchTerm.toLowerCase().includes("olahraga")
    ) {
      olahragaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchTerm]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar
              olahragaRef={olahragaRef}
              manfaatRef={manfaatRef}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Hero />
            <JenisOlahraga olahragaRef={olahragaRef} />
            <Banner manfaatRef={manfaatRef} />
            <Footer />
          </>
        }
      />

    </Routes>
  );
};

export default App;
