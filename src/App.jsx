import './App.css';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import react from './assets/react.svg';

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
      techBubbles: ["React", "Node.js"],
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
      <div id="sidebar">
        <h1>Tofer Cich</h1>
        <h2>Full-Stack Engineer</h2>
        <p>I build scalable, full-stack applications&#8212;designed with precision and intent.</p>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Technologies</li>
        </ul>
      </div>
      <main>
        <About />
        <Projects projects={projects} />
      </main>
    </div>
  )
}

export default App
