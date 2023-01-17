import { useState } from "react";
import { useLocation } from "react-router-dom";
import useIcons from "../useIcons";
import Nav from "../components/Nav";

const Header = (props) => {
  const { pathname } = useLocation();
  const { hamburger, close } = useIcons();
  console.log(pathname);
  const currentPage = pathname === "/" ? "/home" : pathname;
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => setClicked((prev) => !prev);
  console.log(clicked);
  return (
    <header className="header-component bg-[#0f172ae6]">
      <div className="container header-container flex justify-between items-baseline relative w-[90%] py-4 m-auto ">
        <div className="logo-div">
          <h1 className="text-halcyon-green">Katoragashua</h1>
        </div>
        <div className="nav-div flex gap-8" onClick={handleClicked}>
          <div className="location text-slate">
            <h2 data-location={currentPage}>{currentPage}</h2>
          </div>
          {hamburger}
        </div>
        <Nav clicked={clicked} handleClicked={handleClicked} />
      </div>
    </header>
  );
};

export default Header;
