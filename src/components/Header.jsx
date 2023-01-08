import { useLocation } from "react-router-dom";
import useIcons from "../useIcons";
import Nav from "../components/Nav";

const Header = (props) => {
  const { pathname } = useLocation();
  const { hamburger } = useIcons();
  console.log(pathname);
  const currentPage = pathname === "/" ? "/home" : pathname;

  return (
    <header className="header-component ">
      <div className="container header-container">
        <div className="logo-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="96"
            height="96"
          >
            <path fill="black" d="M0 0h24v24H0z" />
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              fill="white"
            />
          </svg>
          {/* <img src="./images/logo.svg" alt=""  className="logo"/> */}
          <h1>Katoragashua</h1>
        </div>
        <div className="location text-slate">
          <h2 data-location={currentPage}>{currentPage}</h2>
        </div>
        <div className="nav">
          <Nav />
        </div>
        {hamburger}
      </div>
    </header>
  );
};

export default Header;
