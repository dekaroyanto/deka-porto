// src/Components/Experience/Experience.jsx
import React, { useContext, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { themeContext } from "../../Context";

import { FaRocket, FaBriefcase, FaCode } from "react-icons/fa";

const Experience = ({ items }) => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  const defaultItems = [
    {
      date: "July 2023 – September 2023",
      title: "CV FIRMOS",
      subtitle: "Web Developer - Intern",
      description:
        "Designed a customer archive system database, created UI for internal applications, and designed banners based on client requests.",
      icon: <FaCode />,
      color: "#3b82f6",
    },
    {
      date: "October 2023 – February 2024",
      title: "PT Trans Retail Indonesia",
      subtitle: "IT Application - Intern",
      description:
        "Developed APIs to connect backend and frontend, implemented UI designs, integrated APIs for dynamic apps, and collaborated with the team on complex tasks.",
      icon: <FaBriefcase />,
      color: "#10b981",
    },
    {
      date: "November 2024 – September 2025",
      title: "Nafast Media",
      subtitle: "IT Staff | Marketplace Administrator | Advertiser",
      description:
        "Designed internal and external applications, managed advertising cost calculations, and handled marketplace data, stock management, and order fulfillment.",
      icon: <FaRocket />,
      color: "#f59e0b",
    },
  ];

  const data = items?.length ? items : defaultItems;

  const styles = useMemo(
    () => ({
      bg: darkMode ? "#0b0f14" : "#ffffff",
      cardBg: darkMode ? "#0f172a" : "#ffffff",
      cardText: darkMode ? "#e5e7eb" : "#0f172a",
      line: darkMode ? "#334155" : "#e5e7eb",
      date: darkMode ? "#94a3b8" : "#475569",
      shadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    }),
    [darkMode]
  );

  return (
    <div
      className="experience"
      id="experience"
      style={{ position: "relative", padding: "48px 0" }}
    >
      {/* Judul Section */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "32px",
          color: darkMode ? "#e5e7eb" : "#111827",
          position: "relative",
          zIndex: 1,
        }}
      >
        Experience
      </h2>

      <VerticalTimeline lineColor={styles.line} animate={true}>
        {data.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            contentStyle={{
              background: styles.cardBg,
              color: styles.cardText,
              boxShadow: styles.shadow,
              border: `1px solid ${darkMode ? "#1f2937" : "#e5e7eb"}`,
              position: "relative",
              zIndex: 1,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${styles.cardBg}`,
            }}
            iconStyle={{
              background: item.color || "#3b82f6",
              color: "#fff",
              boxShadow: styles.shadow,
            }}
            icon={item.icon || <FaCode />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ margin: 0 }}
            >
              {item.title}
            </h3>
            {item.subtitle && (
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ marginTop: 6, opacity: 0.85 }}
              >
                {item.subtitle}
              </h4>
            )}
            {item.description && (
              <p style={{ marginTop: 10, lineHeight: 1.6 }}>
                {item.description}
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
