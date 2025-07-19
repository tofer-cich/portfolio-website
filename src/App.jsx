import './App.css';

import { useRef, useEffect } from 'react';

import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Sidebar from './components/layout/Sidebar';
import Technologies from './components/sections/Technologies';
import Attributions from './components/sections/Attributions';

import react from './assets/react.svg';
import gitHub from './assets/github.png';
import linkedIn from './assets/linkedin.png';
import css from './assets/css-3.png';
import git from './assets/git.png';
import html from './assets/html.png';
import java from './assets/java.png';
import js from './assets/js.png';
import postgre from './assets/postgre.png';
import python from './assets/python.png';
import node from './assets/programing.png';
import Starfield from './components/FX/Starfield';
import memoryCard from './assets/memory-card.png';
import express from './assets/Express.png';
import calculator from './assets/Calculator.png';
import etchASketch from './assets/Etch-a-sketch.png';
import landingPageOdin from './assets/Landing-page-Odin.png';
import spring from './assets/spring-boot.png';

function App() {

  const projects = [
    {
      img: memoryCard,
      title: 'Pokemon Memory Card Game',
      description: `
        Memory based card game created with the PokeAPI and react.
        Don't click on the same card twice. 
      `,
      link: "https://memory-card-9qu.pages.dev/",
      techBubbles: ["React", "HTML", "JavaScript", "CSS", "Git", 'PokeAPI', "VSCode"],
    },
    {
      img: calculator,
      title: 'Calculator',
      description: `
        An implementation of a calculator with functionalities for 
        addition, subtraction, division, and multiplication.
      `,
      link: "https://tofer-cich.github.io/calculator/",
      techBubbles: ["JavaScript", "HTML","CSS", "Git", "VSCode"],
    },
    {
      img: etchASketch,
      title: 'Etch-a-Sketch',
      description: `
        An etch-a-sketch styled drawing site. Select a grid size 
        and use the cursor to paint what you desire.
      `,
      link: "https://tofer-cich.github.io/etch-a-sketch/",
      techBubbles: ["JavaScript", "HTML", "CSS", "VSCode"]
    },
    {
      img: landingPageOdin,
      title: 'Landing Page',
      description: `
        A mock landing page to help understand design and 
        basic HTML and CSS concepts.
      `,
      link: "https://tofer-cich.github.io/landing-page-odin/",
      techBubbles: ["HTML", "CSS", "VSCode"]
    },
  ];

  const technologies = [
    {
      name: 'HTML',
      img: html,
    },
    {
      name: 'CSS',
      img: css,
    },
    {
      name: 'JAVASCRIPT',
      img: js,
    },
    {
      name: 'REACT',
      img: react,
    },
    {
      name: 'GIT',
      img: git,
    },
    {
      name: 'NODE',
      img: node,
    },
    {
      name: 'POSTGRES',
      img: postgre,
    },
    {
      name: 'PYTHON',
      img: python,
    },
    {
      name: 'JAVA',
      img: java,
    },
    {
      name: 'EXPRESS',
      img: express,
    },
    {
      name: 'SPRINGBOOT',
      img: spring,
    },
  ];

  const headerLinksRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    // Populate refs after DOM render
    headerLinksRef.current = Array.from(document.querySelectorAll('.link-container'));
    sectionsRef.current = Array.from(document.querySelectorAll('.main-section'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSectionId = entry.target.id;
            headerLinksRef.current.forEach((link) => {
              link.classList.toggle(
                'active-link',
                link.dataset.target === visibleSectionId
              );
            });
          }
        });
      },
      { threshold: 0.0, rootMargin: '-12% 0px -78%' }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      // Cleanup observers on unmount
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []); // Empty dependency array = runs once

  

  return (
    <>
      <Starfield />
      <div id='screen'>
        <Sidebar gitHub={gitHub} linkedIn={linkedIn}/>
        <main>
          <About />
          <Projects projects={projects} />
          <Technologies technologies={technologies} />
          <Attributions />
        </main>
      </div>
    </>
  )
}

export default App
