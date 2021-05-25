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
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Faqs",
    href: "/#faqs",
  },
  {
    name: "Contact",
    href: "/#footer",
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
          padding: 0 2em;
          display: flex;
          justify-content: space-between;
          background: hsla(0, 0%, 11%, 0.6);
          backdrop-filter: blur(0.3em);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
