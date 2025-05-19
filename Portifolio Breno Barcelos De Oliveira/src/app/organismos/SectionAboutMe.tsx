import { Button } from "../atomos/Button";

export const SectionAboutMe = () => {
  return (
    <section className="text-white h-[90vh] laptop:min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-2 space-y-4 laptop:space-y-8 lg-laptop:space-y-16 xl-desktop:space-y-20 text-center">
        <h1 className="text-4xl laptop:text-5xl lg-laptop:text-7xl xl-desktop:text-9xl font-bold">
          Hello, I'm Breno Barcelos De Oliveira
        </h1>
        <p className="text-2xl tablet:text-3xl laptop:text-4xl lg-laptop:text-5xl xl-desktop:7xl">
          System Analyst & Full-Stack Developer
        </p>
        <p className="text-xl tablet:text-2xl laptop:text-3xl lg-laptop:text-4xl xl-desktop:6xl">
          I deliver stunning, user-friendly Websites and Applications
        </p>
        <div className="flex justify-center space-x-4 lg-laptop:space-x-8">
          <Button name="Let's Talk" link="https://wa.me/qr/FTEJ7AJGMRL2H1" />
          <Button name="Download Resume" link="https://drive.google.com/file/d/1hPjX1kN6CxAiwP59TZhweA8Bt1kDrzp2/view?usp=sharing" />
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl tablet:text-2xl laptop:text-3xl lg-laptop:text-4xl xl-desktop:5xl mb-4">Follow me here</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/BrenoBarcelos"
              target="_blank"
              className="text-description hover:text-white text-lg md:text-xl border-2 rounded-full p-2"
            >
              <i className="text-lg tablet:text-xl laptop:text-xl lg-laptop:text-3xl xl-desktop:4xl">Github</i>
            </a>
            <a
              href="https://www.linkedin.com/in/breno-barcelos-de-oliveira/"
              target="_blank"
              className="text-description hover:text-white text-lg md:text-xl border-2 rounded-full p-2"
            >
              <i className="text-lg tablet:text-xl laptop:text-xl lg-laptop:text-3xl xl-desktop:4xl">LinkedIn</i>
            </a>
            <a
              href="https://www.instagram.com/breno_barcelos04/"
              target="_blank"
              className="text-description hover:text-white text-lg md:text-xl border-2 rounded-full p-2"
            >
              <i className="text-lg tablet:text-xl laptop:text-xl lg-laptop:text-3xl xl-desktop:4xl">Instagram</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}