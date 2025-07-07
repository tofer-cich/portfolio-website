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
                            <div className="link-container">
                                <div className="link">
                                    About
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <div className="link-container">
                                <div className="link">
                                    Projects
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#technologies">
                            <div className="link-container">
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
                        <img src={gitHub} alt='Github'></img>
                    </li>
                    <li>
                        <img src={linkedIn} alt='LinkedIn'></img>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;