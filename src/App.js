
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { data } from './data'

function App() {
  return (
    <main>
      <Hero data={data}/>
      <Navbar resume={data.resume}/>
      <About education={data.education} certification={data.certifications}/>
      <Skills skills={data.skills}/>
      <Projects projects={data.projects}/>
      <Contact links={data.links} location={data.location}/>
      <Footer data={data}/>
    </main>
  );
}

export default App;
