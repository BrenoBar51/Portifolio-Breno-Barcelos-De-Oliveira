import { Header } from "../organismos/Header";

export const Template = () => {
  return (
    <>
      <main className="m-0 p-0 bg-gray-900">
        <Header />
        <div className="text-white min-h-screen flex flex-col items-center justify-center p-0">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-5">
              Hello, I'm Breno Barcelos De Oliveira
            </h1>
            <p className="text-4xl mb-12">
              System Analyst & Full-Stack Developer
            </p>
            <div className="space-x-4">
              <button className="h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Let's Talk
              </button>
              <a
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                href="src/app/assets/Curriculo-Breno Barcelos De Oliveira.pdf"
                download={"Download Resume"}
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg mb-4">Follow me here</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/BrenoBar51" className="text-gray-400 hover:text-white">
                <i className="">Github</i>
              </a>
              <a href="https://www.linkedin.com/in/breno-barcelos-de-oliveira/" className="text-gray-400 hover:text-white">
                <i className="">LinkedIn</i>
              </a>
              <a href="https://www.instagram.com/breno_barcelos04/" className="text-gray-400 hover:text-white">
                <i className="">Instagram</i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}