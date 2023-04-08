import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="page-container">
        <section className="homepage-hero">
          <h2>Hey, I'm Anujan Asokkumar</h2>
          <p>
            A software engineer with a passion for full stack web development
            that create a much more memorable experience for the end user.
          </p>
          <Link to={"/experiences"}>
            <button>View my experience</button>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
