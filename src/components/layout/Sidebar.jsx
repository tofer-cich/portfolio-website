function Sidebar({ gitHub, linkedIn}) {
    return (
        <div id="sidebar">
            <div id='sidebar-title'>
                <h1>Tofer Cich</h1>
                <h2>Full-Stack Engineer</h2>
                <p>I build scalable, full-stack applications&#8212;designed with precision and intent.</p>
                <ul className="sections">
                    <li>
                        <a href="#about">
                            <div className="link-container" data-target="about">
                                <div className="link">
                                    About
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <div className="link-container" data-target="projects">
                                <div className="link">
                                    Projects
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#technologies">
                            <div className="link-container" data-target="technologies">
                                <div className="link">
                                    Technologies
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id='sidebar-contacts'>
                <ul>
                    <li>
                        <a href="https://github.com/tofer-cich" target="_blank" rel="noopener noreferrer">
                            <img src={gitHub} alt='Github'></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kristofercich/" target='_blank' rel="noopener noreferrer">
                            <img src={linkedIn} alt='LinkedIn'></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;