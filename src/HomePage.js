import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Personal Website</h1>
      </header>
      <main>
        <p>This is a placeholder paragraph for my homepage.</p>
        <p>Feel free to replace it with your own content!</p>
        <Link to="/experiences">Click here to see my experiences</Link>
      </main>
    </div>
  );
};

export default HomePage;
