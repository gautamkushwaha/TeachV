import FrameComponent3 from "./FrameComponent3";

const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[7px] box-border max-w-full text-left text-17xl text-black font-poppins">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[96px] mq1050:text-10xl mq450:text-3xl">
          BLOG
        </h3>
        <div className="self-stretch grid flex-row items-start justify-start gap-[47.5px] max-w-full grid-cols-[repeat(3,_minmax(286px,_1fr))] text-5xl font-inter mq750:gap-[24px] mq750:grid-cols-[minmax(286px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(286px,_497px))]">
          <FrameComponent3
            rectangle100="/blog/ai-ml.png"
            aIML={`aI & mL`}
            revolutionizeYourBusiness="revolutionize your business with our aI solutions"
          />
          <FrameComponent3
            rectangle100="/blog/ar-vr.png"
            aIML={`AR & VR`}
            revolutionizeYourBusiness={`transform your reality with aR & VR solutions`}
            propMinWidth="94px"
          />
          <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <img
                className="h-[281px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/blog/cloud.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative uppercase font-semibold mq450:text-lgi">
                  cloud computing
                </div>
                <div className="self-stretch h-[53px] relative capitalize font-medium font-poppins text-gray-100 inline-block mq450:text-lgi">{`transform your reality with aR & VR solutions`}</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[5px] text-base text-steelblue">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <a
                    href="#"
                    className="relative no-underline text-steelblue uppercase font-semibold inline-block min-w-[95px]"
                  >
                    read more
                  </a>
                </div>
                <img
                  className="h-[23px] w-[25px] relative overflow-hidden shrink-0 pt-[3px]"
                  loading="lazy"
                  alt=""
                  src="/arrow-right-alt.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
