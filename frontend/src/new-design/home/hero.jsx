const hero = () => {
  return (
    <div className="relative">
      <img
        src="./home/hero.png"
        alt="hero"
        className="w-full h-[200px] brightness-50
        laptop:h-[550px]"
      />
      <p className="capitalize font-poppins font-bold text-white text-[22px] w-[219px] h-[66px] absolute top-[20px] left-[30px]">
        building vision, shaping the future
      </p>
      <p className="capitalize font-poppins font-light text-white text-[14px] absolute left-[30px] top-[95px]">
        start learning with edPark’s free courses
      </p>
      <div className="flex absolute top-[130px] left-[30px]">
        <input
          type="text"
          placeholder="What You want to learn"
          className="lowercase w-[132px] h-[15px] rounded-full bg-transparent px-[10px] font-space-grotesk font-bold text-[7px] placeholder:text-white border-solid border-yellowish border-[1px]"
        />
        <button className="uppercase w-auto h-[17px] relative left-2 top-0 rounded-full text-white font-space-grotesk font-bold bg-yellowish text-[5px] ">
          get started
        </button>
      </div>
    </div>
  );
};
export default hero;
