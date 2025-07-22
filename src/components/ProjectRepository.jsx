import memoryCard from '../assets/memory-card.png';
import calculator from '../assets/Calculator.png';
import etchASketch from '../assets/Etch-a-sketch.png';
import landingPageOdin from '../assets/Landing-page-Odin.png';
import frankieForest from '../assets/frankieForest.png';

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
    {
        img: frankieForest,
        title: "Frankie and the Forest",
        description: `
        A choose your own adventure game made with twine. 
        Play as Frankie as he searches for his distraught 
        sister, Rosie.
        `,
        link: "https://tofercich.wixsite.com/toferc-twine",
        techBubbles: ["Twine", "JavaScript", "TwineScript"]
    },
];

export default projects;