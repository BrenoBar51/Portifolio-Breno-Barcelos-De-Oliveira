import { SectionAboutMe } from "../organismos/SectionAboutMe";
import { Header } from "../organismos/Header";
import { SectionPortfolio } from "../organismos/SectionPortfolio";
import { SectionSkills } from "../organismos/SectionSkills";

export const Home = () => {
  const webDevIcons = ["/path/to/icon3.svg", "/path/to/icon4.svg"];

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0">
      <div className="flex flex-col justify-center items-center w-full bg-gray-900">
        <Header />
        <SectionAboutMe />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-gray-800">
        <SectionPortfolio
          title="Portfolio"
          cards={[
            {
              title: "E-Commerce",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
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
            },
            {
              title: "Checkin System",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
            {
              title: "Reservation System",
              description: "I deliver stunning, user-friendly websites...",
              icons: webDevIcons,
            },
          ]}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-gray-900">
        <SectionSkills />
      </div>
    </main>
  );
}