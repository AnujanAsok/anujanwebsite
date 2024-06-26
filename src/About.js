import React from "react";
import "./styles.css";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      <div className="page-container">
        <h2 className="about-heading">About me</h2>
        <p className="about-paragraph">
I’ve got a classic tech origin story, but hear me out! I’ve dabbled in quite a few passion projects, which have led to where I am today.I currently work at Afterwork, a B2B corporate event planning platform 
    focused on reducing the time it takes to set up your events. My job is to build out the AI tech stack so that users can find everything that 
    they need and have their event set up within 5 minutes or less. After grinding through Computer Engineering at Ryerson University (now known as Toronto Metropolitan University), and focusing more on learning 
    web development/ML on the side, I realized that software engineering really piqued my interest through how you can solve any problem with a nearly limitless variety of tools.  
    I’ve always been pretty great at using Google, and searching stack overflow for that one post where another programmer is sweating over the same bug, so this made programming as a career really appealing
     to me.  Working on side projects in my free time, such as creating an online Pokedex and recreating board games as web apps, really cemented that this is what I want to be doing. I’m always trying to 
      avoid falling into a stale daily routine, so the idea of working at a startup, where everything is constantly in a state of change, really hooked me in. Some programming languages that I am proficient 
      in are javascript, HTML & CSS, Python, Jquery, Java, C, and React, and several SQL languages, but I’m always adding more to my skill set. I’d love to hear more about experiences from anyone working at 
        a startup, so feel free to connect!
        </p>
      </div>
    </Layout>
  );
};

export default About;

