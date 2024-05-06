import MyButton from "./MyButton";

const HeroSection = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-[3px] px-0 pb-[194px] box-border relative gap-[89px] max-w-full text-left text-45xl text-white font-poppins mq750:gap-[44px] mq750:pt-5 mq750:pb-[126px] mq750:box-border mq450:gap-[22px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/Home/hero.png"
      />
      
      <div className="w-[1051px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h1 className="m-0 h-[141px] relative text-inherit capitalize font-bold font-inherit inline-block z-[1] mq1050:text-32xl mq450:text-19xl">
            <p className="m-0">building vision,</p>
            <p className="m-0">shaping the future</p>
          </h1>
          <div className="flex flex-col items-start justify-start gap-[13px] max-w-full text-5xl">
            <div className="relative capitalize pt-[17px]">
              start learning with edPark’s free courses
            </div>
            <MyButton getStarted="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
