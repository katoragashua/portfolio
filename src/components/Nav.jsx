import { Link } from "react-router-dom";
import useIcons from "../useIcons";

const Nav = (props) => {
  const { home, about, projects, resume, contact } = useIcons();

  return (
    <div className="Nav-component">
      <nav className="nav">
        <ul className="links">
          <li>
            <Link to="/">{home}</Link>
          </li>
          <li>
            <Link to="about">{about}</Link>
          </li>
          <li>
            <Link to="projects">{projects}</Link>
          </li>
          <li>
            <Link to="resume">{resume}</Link>
          </li>
          <li>
            <Link to="contact">{contact}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;