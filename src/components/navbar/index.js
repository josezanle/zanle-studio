import { useState, useEffect } from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import CountryFlag from "./langSelector";

const Navbar = ({ paths }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <span className="logo__content">
        <Logo background="black" strokeOne="white" strokeTwo="white" size="50px" />
        <p className="logo__name">ZANLE STUDIO</p>
        
        </span>
      <Navigation paths={paths} isSticky={isSticky} />
      <CountryFlag/>

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 0 2em;
          height: 100px;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          background: transparent;
          transition: background-color 0.3s ease-in-out;
        }

        .navbar.sticky {
          padding: 2em;
          background-color: rgba(0, 0, 0, 0.7); 
          backdrop-filter: blur(0.7em);
        }

        .navbar .logo__content{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column;
          color: #1c1c1c;
          font-size: 20px;
          gap: 10px; 
        }
        .navbar .logo__content .logo__name{
          width: 176px;
          text-align: center;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 6px;
          color: #999;
          text-transform: uppercase;
        }
        .navbar.sticky .logo__content {
          color: white;
        }

        @media (max-width: 950px) {.navbar{display: none}}
        
      `}</style>
    </div>
  );
};

export default Navbar;
