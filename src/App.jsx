import './App.css';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Sidebar from './components/layout/Sidebar';
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

function App() {

  const projects = [
    {
      img: react,
      title: 'Project 1',
      description: `
        This is Project 1 where I demonstrated a wide variety of 
        techniques that helped establish my learning for future 
        projects and such.
      `,
      techBubbles: ["React", "Node.js", "HTML", "JavaScript", "CSS", "Express", "PostgresQL"],
    },
    {
      img: react,
      title: 'Project 2',
      description: `
        This is Project 2 where I demonstrated a wide variety of 
        techniques that helped establish my learning for future 
        projects and such.
      `,
      techBubbles: ["JavaScript", "Python"],
    },
  ];
  

  return (
    <div id='screen'>
      <Sidebar gitHub={gitHub} linkedIn={linkedIn}/>
      <main>
        <About />
        <Projects projects={projects} />
      </main>
    </div>
  )
}

export default App
