import { useMemo } from "react";

const FrameComponent5 = ({
  screenshot862,
  aIML,
  revolutionizeYourBusiness,
  propMinWidth,
  propHeight,
}) => {
  const aIMLStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const revolutionizeYourBusinessStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[192px] text-left text-5xl text-black font-poppins">
      <img
        className="self-stretch h-[415px] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={screenshot862}
      />
      <div
        className="relative uppercase font-semibold inline-block min-w-[87px] z-[1] mq450:text-lgi"
        style={aIMLStyle}
      >
        {aIML}
      </div>
      <div
        className="self-stretch h-[89px] relative capitalize text-gray-100 inline-block z-[1] mq450:text-lgi"
        style={revolutionizeYourBusinessStyle}
      >
        {revolutionizeYourBusiness}
      </div>
    </div>
  );
};

export default FrameComponent5;
