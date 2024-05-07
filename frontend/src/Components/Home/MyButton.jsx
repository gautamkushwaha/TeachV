import { useMemo } from "react";

const MyButton = ({
  getStarted,
  propPadding,
  propPosition,
  propTop,
  propLeft,
  propFontFamily,
  propColor,
  propHeight,
  propDisplay,
  propFontWeight,
}) => {
  const myButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPadding, propPosition, propTop, propLeft]);

  const getStartedStyle = useMemo(() => {
    return {
      fontFamily: propFontFamily,
      color: propColor,
      height: propHeight,
      display: propDisplay,
      fontWeight: propFontWeight,
    };
  }, [propFontFamily, propColor, propHeight, propDisplay, propFontWeight]);

  return (
    <button
      className="rounded-31xl bg-orangered flex flex-row items-start justify-start pt-2 px-5 pb-2 whitespace-nowrap z-[1] text-left text-5xl text-white font-poppins"
      style={myButtonStyle}
    >
      <b className="relative uppercase" style={getStartedStyle}>
        {getStarted}
      </b>
    </button>
  );
};

export default MyButton;
