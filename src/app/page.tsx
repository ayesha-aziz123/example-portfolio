import About from "@/components/About"
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects/>   
    </div>
  );
};

export default page;
