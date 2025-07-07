function Sidebar({ gitHub, linkedIn}) {
    return (
        <div id="sidebar">
            <div id='sidebar-title'>
                <h1>Tofer Cich</h1>
                <h2>Full-Stack Engineer</h2>
                <p>I build scalable, full-stack applications&#8212;designed with precision and intent.</p>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Technologies</li>
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