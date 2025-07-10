import './App.css';
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
      name: 'Express',
      img: express,
    },
  ];
  

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
