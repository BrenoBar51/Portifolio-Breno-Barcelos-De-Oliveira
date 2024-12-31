import React, { useEffect, useRef } from "react";
import { SectionAboutMe } from "../organismos/SectionAboutMe";
import { Header } from "../organismos/Header";
import { Section } from "../celulas/Section";
import { SectionBody } from "../organismos/SectionBody";

export const Home: React.FC = () => {
  const sectionRefs = {
    aboutMeRef: useRef<HTMLDivElement | null>(null),
    portfolioRef: useRef<HTMLDivElement | null>(null),
    skillsRef: useRef<HTMLDivElement | null>(null),
  };

  const handleScrollSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      sectionRefs.aboutMeRef.current?.offsetHeight;
      sectionRefs.portfolioRef.current?.offsetHeight;
      sectionRefs.skillsRef.current?.offsetHeight;
    };

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [sectionRefs]);

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0">
      <Header
        onScrollAboutMe={() => handleScrollSection(sectionRefs.aboutMeRef)}
        onScrollPortfolio={() => handleScrollSection(sectionRefs.portfolioRef)}
        onScrollSkills={() => handleScrollSection(sectionRefs.skillsRef)}
      />
      <Section
        backgroundColor="bg-section-900"
        ref={sectionRefs.aboutMeRef}
        id="SectionAboutMe"
      >
        <SectionAboutMe />
      </Section>
      <Section
        backgroundColor="bg-section-800"
        ref={sectionRefs.portfolioRef}
        id="SectionPortfolio"
      >
        <SectionBody
          title="Portfolio"
          cards={[
            {
              title: "E-Commerce",
              description:
                "This project consists of building a complete e-commerce using React with Javascript. Development focuses on creating a robust and functional application, exploring React resources for a dynamic and responsive interface, and Javascript for logic and data manipulation. As it is a project that is constantly updated, it serves as a dynamic portfolio, demonstrating the developer's skills and continuous improvement in applying new techniques and solutions in web development.",
              link: "https://github.com/BrenoBar51/Digital-Drip-Store.git",
            },
            {
              title: "Portfolio",
              description:
                "Professional portfolio developed in React and TypeScript, with a clean design and focus on intuitive navigation. Responsive for different screens and devices, the site presents projects that cover web and mobile development, with examples in JavaScript, Python and other languages. Periodic updates aim to improve the interface, add new features and highlight my continuous development, reflecting my learning and technical and creative",
              link: "https://github.com/BrenoBar51/Portifolio-Breno-Barcelos-De-Oliveira.git",
            },
            {
              title: "Snake Game",
              description:
                "Implementation of the classic snake game, developed as a personal challenge to explore the capabilities of Vanilla JavaScript (without the use of external libraries or frameworks). This project aimed to improve my logical skills and gain practical experience in game development, using exclusively the native resources of the language. The implementation uses the <canvas> element for graphic rendering and the snake's movement logic is based on constant updating of its coordinates. Collision detection was implemented by checking the coordinates of the snake's head with the coordinates of the body and the edges of the canvas.",
              link: "https://github.com/BrenoBar51/Snake-Game.git",
            },
            {
              title: "Calculation Software",
              description:
                "Software for pricing development projects, ideal for beginners and freelancers. Developed in Python with CustomTkinter, it automatically calculates prices based on market data (values/hour, complexity, technologies), helping to create competitive budgets. Intuitive interface and accurate results.",
              link: "https://github.com/BrenoBar51/Calculation-software-for-developers.git",
            },
            {
              title: "Reservation System",
              description:
                "It is a back-end reservation system, implemented in C++, to process seat allocation based on a matrix structure (row and column). The application, executed in a terminal, receives input data, containing information such as row, column and passenger class. The system validates the travel class (economy or business) and applies the necessary restrictions to guarantee the integrity of the reservations, returning a confirmation or error message.",
              link: "https://github.com/BrenoBar51/Sistema_de_registro_poltrona.git",
            },
            {
              title: "Turn Based Game",
              description:
                "This project implements a turn-based battle game in .NET with C#, running in a terminal. The game structure comprises two main characters: a hero controlled by the player and a monster controlled by the system, both represented by C# classes with attributes such as hit points, attack and defense. The game implements the actions of attacking (with random damage calculated within a defined range and influenced by the attack attribute), defending (reducing damage taken by a fixed percentage) and healing (restoring a fixed amount of health points). Interaction with the player takes place by entering commands in the terminal, displaying information about the characters' hit points and the result of each turn. The victory condition is reached when one of the combatants' life points reach zero.",
              link: "https://github.com/BrenoBar51/Turn-Based-Game.git",
            },
          ]}
        />
      </Section>
      <Section
        backgroundColor="bg-section-900"
        ref={sectionRefs.skillsRef}
        id="SectionSkills"
      >
        <SectionBody
          title="Skills"
          cards={[
            {
              title: "Front-End",
              description:
                "I develop responsive, high-performance web applications, prioritizing an intuitive user experience adapted to different devices. I specialize in React with TypeScript, using best practices to create dynamic and scalable interfaces.",
            },
            {
              title: "Back-End",
              description:
                "I develop customized back-end solutions with robust languages and architectures for various needs. I create web applications, software and REST APIs with clean code and structured logic, ensuring high performance and scalability.",
            },
            {
              title: "Games",
              description:
                "Game developer with experience in creating 2D and 3D games using Godot, Unity and GameMaker. Proficient in C#.",
            },
          ]}
        />
      </Section>
    </main>
  );
}