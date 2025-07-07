function TechBadge({ name, img }) {
    return (
        <div className="tech-badge">
            <img src={img} alt={name}></img>
            <span className="tech-badge-title">{name}</span>
        </div>
    );
}

export default TechBadge;