import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="page-container">
        <header className="header">
          <h1>Personal Portfolio</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experiences">Experience</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <section className="homepage-hero">
          <h2>Welcome to my personal portfolio site</h2>
          <p>This is a placeholder paragraph for the homepage content.</p>
        </section>
        <section className="homepage-features">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
