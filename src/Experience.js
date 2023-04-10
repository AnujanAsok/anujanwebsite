import Layout from "./Layout";
import "./styles.css";

const Experience = () => {
  const experience = [
    {
      company: "Afterwork",
      position: "Chief Technology Officer",
      duration: "Jan 2023 - Present",
      description:
        "Afterwork is a corporate event planning platform, where you can service all your event needs in one place! My role at Afterwork is to build out our tech stack and ensure our clients have the tools they need to set up their events quicker and easier.",
    },
    {
      company: "Accent",
      position: "Chief Technology Officer",
      duration: "Jan 2022 - Jan 2023",
      description:
        "Accent is a B2B gifting platform with a focus on making it easier to find and send gifts for a broad range of diverse holidays and occasions. My main focus is on developing our tech stack to provide tools for clients to experience easier gifting.",
    },
  ];
  return (
    <Layout>
      <div className="experiences page-container">
        <h1 className="header">My Experience</h1>
        <div className="experience">
          {experience.map((job, index) => (
            <div key={index} className="job">
              <h2>{job.company}</h2>
              <h3>{job.position}</h3>
              <p>{job.duration}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
