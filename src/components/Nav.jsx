import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useIcons from "../useIcons";

const Nav = (props) => {
  const { home, about, projects, resume, contact, close } = useIcons();
  const { clicked, handleClicked } = props;
  const slideInRef = useRef(null);

  useEffect(() => {
    if (clicked) {
      slideInRef.current.classList.remove("-top-[100vh]");
      slideInRef.current.classList.add("top-0");
    }

    if (!clicked) {
      slideInRef.current.classList.remove("top-0");
      slideInRef.current.classList.add("-top-[100vh]");
    }
  }, [clicked]);

  return (
    <nav
      className="nav flex justify-center items-center w-full py-24 pt-32 absolute -top-[100vh] z-40 bg-[#0f172ae6] backdrop-blur-md rounded-b-2xl ease-in"
      ref={slideInRef}
    >
      <div
        className="close absolute top-8 right-8 cursor-pointer border-2 border-halcyon-green border-x-indigo-500 rounded-full"
        onClick={handleClicked}
      >
        {close}
      </div>
      <ul className="links flex flex-col gap-12">
        <li>
          <Link to="/" onClick={handleClicked}>
            {home}
          </Link>
        </li>
        <li>
          <Link to="about" onClick={handleClicked}>
            {about}
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={handleClicked}>
            {projects}
          </Link>
        </li>
        <li>
          <Link to="resume" onClick={handleClicked}>
            {resume}
          </Link>
        </li>
        <li>
          <Link to="contact" onClick={handleClicked}>
            {contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
