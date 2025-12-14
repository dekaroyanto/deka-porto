import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./ProjectCard.css";
import wuling from "../../img/wuling.png";
import scentnice from "../../img/scentnice.png";
import affiliator from "../../img/afiliator.png";
import presensi from "../../img/presensi.png";
import talent from "../../img/talent.png";
import transmart from "../../img/tri.png";
import cbs from "../../img/cbs.png";

const ProjectCard = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      id: 1,
      title: "Promo & Benefit Company Website",
      description:
        "This website is the official company platform showcasing product promotions, exclusive discounts, bundled offers, and customer benefits. Visitors can explore the latest deals, learn about loyalty rewards, and access easy purchase options with direct consultation support.",
      image: cbs,
      demoLink: "https://columbus-majalengka.vercel.app/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Business Consultant Wuling",
      description:
        "This website is Wuling Bali Business Consultant’s official platform, providing car sales info, latest offers, credit simulators, and WhatsApp consultation.",
      image: wuling,
      demoLink: "https://ydewmobilbarubali.my.id/",
      githubLink: "#",
    },

    {
      id: 3,
      title: "ScentNice E-commerce",
      description:
        "This is ScentNice’s e-commerce platform, allowing users to browse products, view details, add to cart, and checkout easily.",
      image: scentnice,
      demoLink: "https://perfume.scentnice.co.id/",
      githubLink: "#",
    },
    {
      id: 4,
      title: "PresenTrack",
      description:
        "This app records employee attendance and calculates salaries automatically based on days present, including employee data input and daily tracking. Ideal for small businesses.",
      image: presensi,
      demoLink: "#",
      githubLink: "https://github.com/dekaroyanto/nafast-media",
    },
    {
      id: 5,
      title: "Talent Recap",
      description:
        "This app records talent sessions and calculates fees automatically, with features like data input, session types, and daily summaries for easy monitoring.",
      image: talent,
      demoLink: "#",
      githubLink: "https://github.com/dekaroyanto/talent-nafast",
    },
    {
      id: 6,
      title: "Transmart Umroh Rewards",
      description:
        "Transmart Umroh Rewards is a loyalty app where customers earn points from purchases and can exchange them for lottery vouchers to win a free Umrah trip.",
      image: transmart,
      demoLink: "https://hadiah.transmart.co.id/",
      githubLink: "#",
    },
    {
      id: 7,
      title: "ScentNice Affiliate",
      description:
        "This landing page helps users register for the ScentNice perfume affiliate program, offering a clean, modern, and responsive design.",
      image: affiliator,
      demoLink: "https://scentnice.co.id/affiliate",
      githubLink: "#",
    },
  ];

  return (
    <div
      className="project-section"
      id="project"
      style={{
        position: "relative",
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
        padding: "48px 0",
      }}
    >
      <div
        className="project-header"
        style={{ position: "relative", zIndex: 1 }}
      >
        <span style={{ color: darkMode ? "white" : "" }}>My Projects</span>
        <span>Portfolio</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Each project is built with a focus on functionality, clean design, and
          a smooth user experience. Click Demo to try it out or GitHub to view
          the source code.
        </span>
      </div>

      <div
        className="projects-grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              background: darkMode ? "rgba(36, 45, 73, 0.8)" : "white",
              border: darkMode ? "1px solid #333" : "none",
            }}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div
                className="card-overlay"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, rgba(252, 166, 31, 0.2) 0%, rgba(221, 248, 254, 0.2) 100%)"
                    : "linear-gradient(135deg, var(--orangeCard) 0%, var(--blueCard) 100%)",
                }}
              ></div>
            </div>

            <div className="card-content">
              <h3
                className="card-title"
                style={{ color: darkMode ? "white" : "var(--black)" }}
              >
                {project.title}
              </h3>
              <p
                className="card-description"
                style={{ color: darkMode ? "#ccc" : "var(--gray)" }}
              >
                {project.description}
              </p>

              <div className="card-buttons">
                {project.demoLink && project.demoLink !== "#" && (
                  <a
                    href={project.demoLink}
                    className="card-button card-button-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    className="card-button card-button-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
