import './App.css';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

function App() {

  const projects = [
    {
      img: './assets/react.svg',
      title: 'Project 1',
      description: 'Project 1 Description',
      techBubbles: ["React", "Node.js"],
    },
    {
      img: 'assets/react.svg',
      title: 'Project 2',
      description: 'Project 2 Description',
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
