import Navbar from "./Components/Navbar/Navbar.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/Services.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import ProjectCard from "./Components/ProjectCard/ProjectCard.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context.jsx";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
