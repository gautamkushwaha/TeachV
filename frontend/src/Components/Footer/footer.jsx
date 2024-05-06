const Footer = () => {
  return (
    <footer className="self-stretch flex flex-row items-end justify-between pt-[50px] pb-9 pr-[77px] pl-[100px] box-border relative max-w-full gap-[20px] text-left text-base text-white font-poppins lg:flex-wrap lg:justify-center mq750:pl-[50px] mq750:pr-[38px] mq750:box-border mq450:pl-5 mq450:pt-8 mq450:pb-[23px] mq450:box-border">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black" />
      <div className="w-[649px] flex flex-row items-start justify-center gap-[105px] min-w-[649px] max-w-full text-17xl lg:flex-1 mq750:flex-wrap mq750:gap-[52px] mq1050:min-w-full mq450:gap-[26px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[107px] min-w-[273px] max-w-full mq450:gap-[53px]">
          <div className="w-[400px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq1050:text-10xl mq450:text-3xl">
              EDPark
            </h3>
            <div className="self-stretch relative text-5xl font-light z-[1] mq450:text-lgi">
              {`+1400 `}
              <span className="capitalize">
                codeiam community dIGIFAC first floor, AUCE, north campus
              </span>
            </div>
          </div>
          <div className="relative text-5xl z-[1] mq450:text-lgi">
            © 2024 EDPark, All Rights Reserved.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[76px] px-0 pb-0 text-base">
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <a
              href="#"
              className="relative no-underline text-white uppercase inline-block font-inter min-w-[49px] z-[1]"
            >
              HOME
            </a>
            <a
              href="#"
              className="relative no-underline text-white uppercase inline-block font-inter min-w-[75px] z-[1]"
            >
              Courses
            </a>
            <a
              href="#"
              className="relative no-underline text-white uppercase inline-block font-inter min-w-[124px] z-[1]"
            >
              Collabration
            </a>
            <a
              href="#"
              className="relative no-underline text-white uppercase inline-block font-inter min-w-[44px] z-[1]"
            >
              blog
            </a>
            <a
              href="#"
              className="h-[11px] no-underline text-white relative uppercase font-inter inline-block min-w-[81px] z-[1]"
            >
              about us
            </a>
          </div>
        </div>
      </div>
      <div className="w-[318px] flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px] box-border min-w-[318px] lg:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[29.8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10.3px] shrink-0">
            <b className="h-[11px] relative uppercase inline-block z-[1]">
              Join our newsletter
            </b>
            <div className="relative inline-block min-w-[115px] z-[1]">
              E<span className="capitalize">mail address</span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px text-sm">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="w-[291px] h-[50px] relative box-border z-[1] border-[1.5px] border-solid border-white" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[9px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[7px] h-[7px] relative box-border z-[1] border-[0.5px] border-solid border-white" />
                    </div>
                    <div className="flex-1 relative capitalize font-light inline-block min-w-[189px] z-[1]">
                      yes subscribe me to your newsletter
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="w-[295px] no-underline flex flex-row items-start justify-center py-[15px] px-5 box-border relative z-[1] text-black font-inter"
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-white" />
              <b className="h-3 relative uppercase inline-block min-w-[65px] z-[1]">
                submit
              </b>
            </a>
          </div>
          <div className="w-[295px] flex flex-row items-start justify-start py-0 px-[47px] box-border shrink-0 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-end justify-between gap-[20px] z-[1]">
              <a href="#">
                <img
                  className="h-5 w-[19.4px] relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </a>
              <a href="#">
                <img
                  className="self-stretch w-[10.1px] relative max-h-full min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </a>
              <a href="#">
                <img
                  className="h-[19px] w-[22.1px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </a>
              <a href="#">
                <img
                  className="h-[18.1px] w-[23.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/youtube.svg"
                />
              </a>
              <a href="">
                <img
                  className="w-[14.8px] h-[17.2px] relative"
                  loading="lazy"
                  alt=""
                  src="/-icon-linkedin.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
