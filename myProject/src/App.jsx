import React, { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import Hero from "./scenes/Hero";
import Cards from "./scenes/Cards";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("Home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b bg-lime-100">
        <Hero />
      </section>
      <section>
        <Cards />
      </section>
    </main>
  );
};

export default App;
