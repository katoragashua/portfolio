import { useEffect, useRef, useState } from "react";
import useTranslation from "../useTranslation";
import { Link } from "react-router-dom";
import "../index.css";
import Typewriter from "typewriter-effect";
import ReactCountryFlag from "react-country-flag";

const TypewriterComponent = () => {
  return (
    <Typewriter
      options={{
        strings: ["KATOR AGASHUA"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

const Home = (props) => {
  const { lang, translations, count } = useTranslation();
  const current = Object.keys(translations).find((key) => key === lang[count]);

  return (
    <div className="home-page">
      <section className="hero grid xl:grid-cols-2 place-items-center gap-8 justify-between ">
        <div className="intro">
          <h2
            className="greeting text-lighter-slate text-[2rem]"
            data-shadow={translations[current].greeting}
          >
            {translations[current].greeting} 👋🏾, {translations[current].art}{" "}
          </h2>
          <h1 className="name font-extrabold xl:text-6xl text-lighter-slate">
            <TypewriterComponent />
          </h1>
          {}
          <h2 className="intro-paragraph text-light-slate">
            I am a Frontend Developer from Nigeria.{" "}
            <ReactCountryFlag
              countryCode="NG"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
          </h2>
          <h2 className="intro-paragraph">
            You can see my{" "}
            <Link to="projects">
              <span className="home-links">WORK</span>
            </Link>{" "}
            here.
          </h2>
          <h2 className="intro-paragraph">
            You can also find out more{" "}
            <Link to="about">
              <span className="home-links">ABOUT</span>
            </Link>{" "}
            me here.
          </h2>
          <h2 className="intro-paragraph">
            If you'd like to have a chat you can{" "}
            <Link to="contact">
              <span className="home-links">CONTACT</span>
            </Link>{" "}
            me.
          </h2>
          {/* <hr /> */}
        </div>
        <div className="hero-image flex justify-center relative z-0  rounded-3xl w-full">
          {/* <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10"
          >
            <path
              fill=""
              d="M51.3,-72.9C64.9,-60.7,73.4,-43.6,77.7,-26.2C82,-8.8,82.2,9,75,22.3C67.8,35.5,53.2,44.3,39.5,52.7C25.7,61.1,12.9,69,-1.4,70.9C-15.7,72.8,-31.4,68.8,-46.5,60.9C-61.6,53,-76.1,41.2,-77.7,27.3C-79.3,13.5,-68,-2.5,-62.3,-20.3C-56.6,-38.1,-56.4,-57.8,-47,-71.3C-37.5,-84.9,-18.8,-92.2,0,-92.3C18.8,-92.3,37.7,-85,51.3,-72.9Z"
              transform="translate(100 100)"
            />
  </svg> */}

          <img
            src="./images/peep-46.svg"
            className="dev-image w-[80%] "
            alt="animated developer image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
