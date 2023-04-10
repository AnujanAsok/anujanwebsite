import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <h1>Anujan Asokkumar</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experiences">Experience</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="icon-column">
          <a href="https://github.com/AnujanAsok">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anujan-asokkumar/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/AnujanAsokkumar">
            <FaTwitter />
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
