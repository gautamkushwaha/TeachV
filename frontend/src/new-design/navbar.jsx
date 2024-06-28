const navbar = () => {
  return (
    <div className="h-[18px] w-auto shadow-sm shadow-black sticky z-10 bg-white top-0 font-space-grotesk font-bold flex py-[15px] justify-around items-center">
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-0.5 text-bluish ml-[10px] tablet:hidden"
      >
        <path
          d="M0 12H13V10H0V12ZM0 7H10V5H0V7ZM0 0V2H13V0H0ZM18 9.59L14.42 6L18 2.41L16.59 1L11.59 6L16.59 11L18 9.59Z"
          fill="#003E81"
        />
      </svg>
      <h1 className="text-[16px] my-0 text-bluish laptop:text-[1.75vw]">Teach Your Village</h1>
      <h1 className="text-bluish text-[1.15vw]  hidden laptop:block">COURSES 
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="#003B7A"/>
        </svg>
      </h1>
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute ml-3"
      >
        <path
          d="M2.04171 2.47917H0.583374V1.89584H2.04171V2.47917ZM2.04171 3.35417H0.583374V3.93751H2.04171V3.35417ZM6.00546 5.39584L4.88837 4.27876C4.65504 4.43042 4.38087 4.52084 4.08337 4.52084C3.27837 4.52084 2.62504 3.86751 2.62504 3.06251C2.62504 2.25751 3.27837 1.60417 4.08337 1.60417C4.88837 1.60417 5.54171 2.25751 5.54171 3.06251C5.54171 3.36001 5.45129 3.63417 5.29962 3.86459L6.41671 4.98459L6.00546 5.39584ZM4.95837 3.06251C4.95837 2.58126 4.56462 2.18751 4.08337 2.18751C3.60212 2.18751 3.20837 2.58126 3.20837 3.06251C3.20837 3.54376 3.60212 3.93751 4.08337 3.93751C4.56462 3.93751 4.95837 3.54376 4.95837 3.06251ZM0.583374 5.39584H3.50004V4.81251H0.583374V5.39584Z"
          fill="#003E81"
        />
      </svg>

      <input
        type="text"
        placeholder="what you want to learn"
        className="w-[74px] h-[15px] pl-3 rounded-full text-[5px] placeholder:text-bluish font-space-grotesk font-bold border-solid border-[1px] border-bluish"
      />
      <button className="w-[40px] h-[13px] font-space-grotesk font-bold my-0.5 bg-bluish text-white text-[7px] rounded-full  hover:text-bluish hover:border-solid hover:border-[1px] hover:border-bluish hover:bg-white">
        Sign Up
      </button>
      <button className="w-[40px] h-[13px] my-0.5 bg-bluish text-white font-space-grotesk font-bold text-[7px] rounded-full  hover:text-bluish hover:border-solid hover:border-[1px] hover:border-bluish hover:bg-white">
        Login
      </button>
    </div>
  );
};
export default navbar;
