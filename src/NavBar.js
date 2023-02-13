import { Link } from 'react-router-dom';
import './css/Nav.css';

const NavBar = () => {
    return (
            <nav>
                <p><h4>Gail Mulcahey</h4></p>
                <ul>
                    <li>
                        <Link to="/">Summary</Link>
                    </li>
                    <li>
                        <Link to="/expertise">Technology Expertise</Link>
                    </li>
                    <li>
                        <Link to="/experiences">Professional Experience</Link>
                    </li>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/training">Additional Training</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
      
    )
}

export default NavBar;