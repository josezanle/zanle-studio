import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      {children}
    </>
  );
};

export default Layout;
