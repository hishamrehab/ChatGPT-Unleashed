import React from "react";

import { Navbar, Brand, CTA, Feature } from "./components";
import {
  Footer,
  Blog,
  Header,
  Hero,
  Services,
  WhatGPT3,
  Possibility,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
