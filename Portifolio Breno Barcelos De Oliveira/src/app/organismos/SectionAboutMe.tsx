import { Button } from "../atomos/Button";
import { ButtonDownload } from "../atomos/ButtonDownload";

export const SectionAboutMe = () => {
  return (
    <section className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
          Hello, I'm Breno Barcelos De Oliveira
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-6">
          System Analyst & Full-Stack Developer
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-6">
          I deliver stunning, user-friendly Websites and Applications
        </p>
        <div className="flex justify-center space-x-4">
          <Button name="Let's Talk" link="https://wa.me/qr/FTEJ7AJGMRL2H1" />
          <ButtonDownload name="Download Resume" />
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl md:text-2xl mb-4">Follow me here</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/BrenoBar51"
              className="text-gray-400 hover:text-white text-lg md:text-xl"
            >
              <i className="">Github</i>
            </a>
            <a
              href="https://www.linkedin.com/in/breno-barcelos-de-oliveira/"
              className="text-gray-400 hover:text-white text-lg md:text-xl"
            >
              <i className="">LinkedIn</i>
            </a>
            <a
              href="https://www.instagram.com/breno_barcelos04/"
              className="text-gray-400 hover:text-white text-lg md:text-xl"
            >
              <i className="">Instagram</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}