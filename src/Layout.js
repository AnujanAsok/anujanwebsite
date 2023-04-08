import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <h1>Anujan Asokkumar</h1>
        <nav>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experiences">Experience</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
