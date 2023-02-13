import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Summary</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/experiences">Professional Experience</Link>
                </li>
                <li>
                    <Link to="/training">Additional Training</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;