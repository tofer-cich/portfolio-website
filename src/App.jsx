import './App.css';

import { useRef, useEffect } from 'react';

import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Sidebar from './components/layout/Sidebar';
import Technologies from './components/sections/Technologies';
import Attributions from './components/sections/Attributions';
import projects from './components/data/ProjectRepository';
import technologies from './components/data/TechBadgeRepository';

import Starfield from './components/FX/Starfield';
import gitHub from './assets/github.png';
import linkedIn from './assets/linkedin.png';


function App() {

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
