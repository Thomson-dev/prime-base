import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Earn from "./Components/Earn";
import Steps from "./Components/Steps";
import Slider from "./Components/Slider";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Earn />
      <Steps />
      <Slider />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
