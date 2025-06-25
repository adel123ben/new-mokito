import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cooktails';
import About from './components/About';
import Arts from './components/Arts';
import Menue from './components/Menue';
import Contact from './components/Contact';


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Arts />
      <Menue />
      <Contact />
    </main>
  )
}

