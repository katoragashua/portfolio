import useIcons from "../useIcons";

const Footer = () => {
  const { twitter, linkedin, github } = useIcons();

  return (
    <div className="footer flex flex-col gap-2 p-8 pb-4">
      <div className="social mx-auto">
        <a href="">{twitter}</a>
        <a href="">{linkedin}</a>
        <a href="">{github}</a>
      </div>
      <p className="mx-auto text-center text-sm">
        &copy; Banana Bandit {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
