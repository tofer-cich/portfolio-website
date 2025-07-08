function ProjectCard({ img, title, description, techBubbles, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                    <div className="project-card-img">
                        <img src={img} alt={title} />
                    </div>
                    <div className="project-card-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="tech-bubbles">
                            {techBubbles.map((techBubble, index) => (
                                <span key={index} className="bubble">{techBubble}</span>
                            ))}
                        </div>
                    </div>
            </div>
        </a>
    );
};

export default ProjectCard;