import useIcons from "../useIcons";

const About = (props) => {
  const { skills } = useIcons();
  const skillsList = skills.map((skill) => (
    <div
      key={skill.id}
      className="skills1 flex flex-col w-[50%]"
    >
      <img src={skill.img} alt="" className="w-[40px]" />
    </div>
  ));

  const skillsList2 = skills.map((skill) => (
    <div
      key={skill.id}
      className="skills2 flex flex-col w-[50%]"
    >
      <img src={skill.img} alt="" className="w-[40px]" />
    </div>
  ));

  return (
    <div className="about-page grid gap-12 overflow-x-hidden">
      <div className=" flex flex-col xl:flex-row gap-12 items-start">
        <div className="my-img p-8 xl:w-1/2 border-halcyon-green border-4 rounded-md  bg-slate relative">
          <div className="img-overlay absolute top-0 left-0 bottom-0 right-0 block bg-halcyon-green opacity-20 hover:opacity-0 "></div>
          <img src="./images/kator.jpg" alt="" className="w-full" />
        </div>
        <div className="about-text">
          <h2 className="text-center">About Me</h2>
          <p>
            Hello again! My name is Kator Jason Agashua and I am a Frontend
            Developer.
          </p>
          <p>
            I have always been fascinated by technology and when the chance came
            for me to learn web developement, I quickly jumped on it.
          </p>
          <p>
            Today, my main focus is to continue hacking my way through
            technology's dense ecosystem one day at a time - building and
            learning.
          </p>
          <p>
            I am passionate about what I do and I'm previledged to be able to
            build accessible products and digital experiences with users in
            mind.
          </p>
          <p>My hobbies are playing Football (soccer), and traveling.</p>
        </div>
      </div>
      <div className="skills flex overflow-x-auto">
        {skillsList}
        {skillsList2}
      </div>
    </div>
  );
};

export default About;
