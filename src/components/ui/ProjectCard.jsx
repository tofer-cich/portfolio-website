function ProjectCard({ img, title, description, techBubbles }) {
    return (
        <div className="project-card">
            <div className="container">
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div class="tech-bubbles">
                    {techBubbles.map((techBubble, index) => (
                        <span key={index} className="bubble">{techBubble}</span>
                    ))};
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;