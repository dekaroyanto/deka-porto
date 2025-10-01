import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./ProjectCard.css";

const ProjectCard = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Website toko online dengan fitur lengkap seperti keranjang belanja, pembayaran, dan manajemen produk.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan drag & drop, notifikasi, dan kolaborasi tim.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard cuaca dengan prediksi 7 hari, peta interaktif, dan notifikasi cuaca ekstrem.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1365&q=80",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description:
        "Platform media sosial dengan fitur posting, komentar, like, dan chat real-time.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description:
        "Aplikasi pelacak kebugaran dengan grafik progres, rencana latihan, dan integrasi wearable.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description:
        "Aplikasi pencari resep dengan filter bahan, video tutorial, dan sistem rating.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      demoLink: "#",
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
      {/* Blur pertama */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "300px",
          height: "300px",
          backgroundColor: "#ABF1FF94",
          filter: "blur(100px)",
          zIndex: 0,
          borderRadius: "50%",
        }}
      ></div>

      {/* Blur kedua */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-60px",
          width: "400px",
          height: "400px",
          backgroundColor: "var(--purple)",
          filter: "blur(150px)",
          zIndex: 0,
          borderRadius: "50%",
        }}
      ></div>

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
                <a
                  href={project.demoLink}
                  className="card-button card-button-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="card-button card-button-github"
                  style={{
                    background: darkMode ? "#333" : "var(--black)",
                    color: "white",
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
