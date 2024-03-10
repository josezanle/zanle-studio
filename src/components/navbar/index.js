import Logo from "../logo";
import LangSelect from "./langSelector";
import Navigation from "./navigation";

const paths = [
  {
    name: "Acerca",
    href: "about"
  },
  {
    name: "Precios",
    href: "price"
  },
  {
    name: "FAQs",
    href: "faqs"
  },
  {
    name: "Contacto",
    href: "footer"
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo__content"><Logo strokeOne="white" strokeTwo="white" size="50px" />Zanle Studio</span>
      <Navigation paths={paths} />
      <LangSelect />

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 3em;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          background: transparent;
          backdrop-filter: blur(0.3em);
          transition: background-color 0.3s ease-in-out;
        }
        .navbar .logo__content{
          display: flex;
          align-items: center;
          color: white; font-size: 22px;
        }
        @media (max-width: 1280px) {
          .navbar{
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
