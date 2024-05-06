import { useMemo } from "react";

const FrameComponent3 = ({
  rectangle100,
  aIML,
  revolutionizeYourBusiness,
  propMinWidth,
}) => {
  const aIML1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-5xl text-black font-inter">
      <img
        className="self-stretch h-[281px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={rectangle100}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div
          className="relative uppercase font-semibold inline-block min-w-[88px] mq450:text-lgi"
          style={aIML1Style}
        >
          {aIML}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-gray-100 font-poppins">
          <div className="self-stretch h-[53px] relative capitalize font-medium inline-block mq450:text-lgi">
            {revolutionizeYourBusiness}
          </div>
          <div className="flex flex-row items-start justify-start gap-[5px] text-base font-inter">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <a href="#" className="relative uppercase text-steelblue no-underline font-semibold inline-block min-w-[95px]">
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
  );
};

export default FrameComponent3;
