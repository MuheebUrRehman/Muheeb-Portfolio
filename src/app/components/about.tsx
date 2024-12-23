"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (e: MouseEvent, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <section className="about" id="about-section">
      <div className="about-main">
        <Image src="/about-pic.png" alt="" width={400} height={400} />
        <div className="about-info">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni,
            aspernatur a, temporibus illo eaque facere dicta laudantium ex,
            molestiae facilis rem quis accusantium ratione omnis harum dolore
            officia rerum.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam magni, aspernatur a, temporibus illo eaque facere dicta
            laudantium ex, molestiae facilis rem quis accusantium ratione omnis
            harum dolore officia rerum.
          </p>
          <div className="about-tab">
            <ul className="heading">
              <li>
                <Link href="#" onClick={(e) => handleTabClick(e, "education")}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleTabClick(e, "skills")}>
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => handleTabClick(e, "certification")}
                >
                  Certification
                </Link>
              </li>
            </ul>
            <ul
              className="edu-content"
              style={{ display: activeTab === "education" ? "block" : "none" }}
            >
              <li>DAE (CIT)</li>
              <li>Intermediate (Pre-Engineering)</li>
              <li>Matriculation (Science)</li>
            </ul>
            <ul
              className="skill-content"
              style={{ display: activeTab === "skills" ? "block" : "none" }}
            >
              <li>HTML/CSS</li>
              <li>Javascript/Typescript</li>
              <li>Tailwind Css</li>
            </ul>
            <ul
              className="cert-content"
              style={{
                display: activeTab === "certification" ? "block" : "none",
              }}
            >
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
