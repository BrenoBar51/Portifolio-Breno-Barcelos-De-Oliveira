export const Icons = () => {
  return (
    <div className="flex justify-center place-content-center content-center space-x-8 mx-10 outline-offset-4 text-white">
      <button className="font-bold rounded-full transition hover:border-2 active:border-2 focus:outline-none">
        About Me
      </button>
      <button className="font-bold rounded-full transition hover:border-2 active:border-2 focus:outline-none">
        Portfolio
      </button>
      <button className="font-bold rounded-full transition hover:border-2 active:border-2 focus:outline-none">
        Resume
      </button>
      <button className="font-bold rounded-full transition hover:border-2 active:border-2 focus:outline-none">
        Contact
      </button>
    </div>
  );
}