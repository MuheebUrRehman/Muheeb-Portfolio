import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Carosel from "./components/carosel";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div id="home-section">
      <Navbar />
      <Carosel />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
