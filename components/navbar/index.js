import Logo from "./a-logo";
import MenuBurger from "./c-menu-burger";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Resume",
    href: "/#resume",
  },

  {
    name: "Projects",
    href: "/#projects",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <MenuBurger links={links} />
      <style jsx>{`
        .navbar {
          width: 100vw;
          position: fixed;
          top: 0;
          padding: 1em 2em;
          display: flex;
          justify-content: space-between;
          background-image: linear-gradient(to bottom, #1c1c1c, transparent);
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
