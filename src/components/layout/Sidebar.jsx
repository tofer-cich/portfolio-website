function Sidebar({ gitHub, linkedIn}) {
    return (
        <div id="sidebar">
            <div id='sidebar-title'>
                <h1>Tofer Cich</h1>
                <h2>Full-Stack Engineer</h2>
                <p>I build scalable, full-stack applications&#8212;designed with precision and intent.</p>
                <ul className="sections">
                    <li>
                        <span className="svg-emdash">
                            <svg className="emdash-line" viewBox="0 0 100 2" preserveAspectRatio="none">
                                <line x1="0" y1='1' x2='0' y2='100' stroke='currentColor' strokeWidth='2' />
                            </svg>
                            About
                        </span>
                    </li>
                    <li>
                        <span className="svg-emdash">
                            <svg className="emdash-line" viewBox="0 0 100 2" preserveAspectRatio="none">
                                <line x1="0" y1='1' x2='0' y2='100' stroke='currentColor' strokeWidth='2' />
                            </svg>
                            Projects
                        </span>
                    </li>
                    <li>
                        <span className="svg-emdash">
                            <svg className="emdash-line" viewBox="0 0 100 2" preserveAspectRatio="none">
                                <line x1="0" y1='1' x2='0' y2='100' stroke='currentColor' strokeWidth='2' />
                            </svg>
                            Technologies
                        </span>
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