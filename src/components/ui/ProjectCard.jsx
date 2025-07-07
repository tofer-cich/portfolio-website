function ProjectCard({ img, title, description, techBubbles }) {
    return (
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
                    ))};
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;