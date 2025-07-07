import TechBadge from '../ui/TechBadge';

function Technologies({ technologies }) {
    return (
        <div id='technologies'>
            <h2>Technologies</h2>
            <div id='tech-badge-section'>
                {technologies.map((tech, index) => (
                    <TechBadge name={tech.name} img={tech.img} key={index} />
                ))};
            </div>
        </div>
    );
}

export default Technologies;