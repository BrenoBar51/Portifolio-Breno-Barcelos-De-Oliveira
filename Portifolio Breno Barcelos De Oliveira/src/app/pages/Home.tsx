import React, { useRef } from "react";
import { SectionAboutMe } from "../organismos/SectionAboutMe";
import { Header } from "../organismos/Header";
import { SectionPortfolio } from "../organismos/SectionPortfolio";
import { SectionSkills } from "../organismos/SectionSkills";
import { Section } from "../celulas/Section";

export const Home: React.FC = () => {
  const webDevIcons = ["/path/to/icon3.svg", "/path/to/icon4.svg"];

  const sectionRefs = {
    aboutMeRef: useRef<HTMLDivElement>(null),
    portfolioRef: useRef<HTMLDivElement>(null),
    skillsRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  };

  const handleScrollSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0">
      <Header
        onScrollAboutMe={() => handleScrollSection(sectionRefs.aboutMeRef)}
        onScrollPortfolio={() => handleScrollSection(sectionRefs.portfolioRef)}
        onScrollSkills={() => handleScrollSection(sectionRefs.skillsRef)}
        onScrollContact={() => handleScrollSection(sectionRefs.contactRef)}
      />
      <Section
        backgroundColor="bg-gray-900"
        ref={sectionRefs.aboutMeRef}
        id="SectionAboutMe"
      >
        <SectionAboutMe />
      </Section>
      <Section
        backgroundColor="bg-gray-800"
        ref={sectionRefs.portfolioRef}
        id="SectionPortfolio"
      >
        <SectionPortfolio
          title="Portfolio"
          cards={[
            {
              title: "E-Commerce",
              description:
                "This project consists of building a complete e-commerce using React with Javascript. Development focuses on creating a robust and functional application, exploring React resources for a dynamic and responsive interface, and Javascript for logic and data manipulation. As it is a project that is constantly updated, it serves as a dynamic portfolio, demonstrating the developer's skills and continuous improvement in applying new techniques and solutions in web development.",
              icons: webDevIcons,
              link: "https://e-commerce-digital-drip-store.vercel.app/",
            },
            {
              title: "E-Commerce API",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
            {
              title: "Snake Game",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
              link: "https://snake-game-simple.vercel.app/",
            },
            {
              title: "Calculation Software for Developers",
              description: "Software for pricing development projects, ideal for beginners and freelancers. Developed in Python with CustomTkinter, it automatically calculates prices based on market data (values/hour, complexity, technologies), helping to create competitive budgets. Intuitive interface and accurate results.",
              icons: webDevIcons,
              link: "https://github.com/BrenoBar51/Calculation-software-for-developers.git",
            },
            {
              title: "Reservation System",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
              link: "https://github.com/BrenoBar51/Sistema_de_registro_poltrona.git",
            },
            {
              title: "Turn Based Game",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
              link: "https://github.com/BrenoBar51/Turn-Based-Game.git",
            },
          ]}
        />
      </Section>
      <div
        className="flex flex-col justify-center items-center w-full bg-gray-900"
        ref={sectionRefs.skillsRef}
        id="SectionSkills"
      >
        <SectionSkills
          title="Skills"
          cards={[
            {
              title: "Front-End",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
            {
              title: "Back-End",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
            {
              title: "API REST",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
          ]}
        />
      </div>
      <div
        className="flex flex-col justify-center items-center w-full bg-gray-900"
        ref={sectionRefs.contactRef}
        id="SectionContact"
      >
        <h1>hello</h1>
      </div>
    </main>
  );
}