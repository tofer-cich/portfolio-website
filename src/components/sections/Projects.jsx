import ProjectCard from "../ui/ProjectCard";

function Projects({ projects }) {
    return (
        <div id="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard img={project.img} 
                    title={project.title} 
                    description={project.description} 
                    techBubbles={project.techBubbles} 
                    link={project.link}
                    key={index} 
                />
            ))}
        </div>
    );
};

export default Projects;