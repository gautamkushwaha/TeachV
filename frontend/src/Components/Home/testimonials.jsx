const FrameComponent1 = () => {
  return (
    <section className="self-stretch bg-snow box-border flex flex-row items-start justify-center pt-[46px] px-[100px] pb-[50px] gap-[40px] max-w-full text-left text-5xl text-gray-100 font-poppins border-t-[1px] border-solid border-gray-300 border-b-[1px] lg:flex-wrap mq750:gap-[20px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pt-[30px] mq450:px-5 mq450:pb-8 mq450:box-border">
      <div className="h-[368px] w-[1440px] relative bg-snow box-border hidden max-w-full border-t-[1px] border-solid border-gray-300 border-b-[1px]" />
      <div className="w-[370px] flex flex-col items-start justify-start gap-[24px] min-w-[370px] max-w-full lg:flex-1 mq750:min-w-full">
        <b className="relative uppercase z-[1] mq450:text-lgi">testimonials</b>
        <h3 className="m-0 self-stretch h-[133px] relative text-17xl capitalize font-medium font-inherit text-black inline-block z-[1] mq1050:text-10xl mq450:text-3xl">
          we offer a range of services to meet all types of needs
        </h3>
        <a
          href="#"
          className="rounded-31xl no-underline mt-5 bg-black flex flex-row items-start justify-start p-[15px] whitespace-nowrap z-[1] text-base text-white font-inter"
        >
          <div className="h-[42px] w-28 relative rounded-31xl bg-black hidden" />
          <b className="h-3 relative uppercase inline-block min-w-[82px] z-[1]">
            see more
          </b>
        </a>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start min-w-[539px] [row-gap:20px] max-w-full text-xs text-white font-source-sans-3 mq750:flex-wrap mq1050:min-w-full">
        <div className="flex-1 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini bg-chocolate box-border flex flex-col items-start justify-start pt-[39px] pb-[21px] pr-5 pl-10 gap-[22px] min-w-[279px] max-w-full z-[1] border-[1px] border-solid border-black">
          <div className="w-[430px] h-[268px] relative shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini bg-chocolate box-border hidden max-w-full border-t-[1px] border-solid border-black border-b-[1px] border-l-[1px]" />
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-[30px] w-[30px] relative rounded-[50%] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <div className="h-2 relative inline-block min-w-[49px] z-[1]">
                  MOUNIKA
                </div>
                <div className="h-2 relative text-aqua inline-block min-w-[55px] z-[1]">
                  @mounika
                </div>
              </div>
            </div>
          </div>
          <div className="w-[339px] relative text-xl capitalize font-poppins inline-block max-w-full z-[1] mq450:text-base">{`describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details `}</div>
        </div>
        <div className="w-[419px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white box-border flex flex-col items-start justify-start pt-[39px] pb-[21px] pr-5 pl-10 gap-[22px] min-w-[419px] max-w-full z-[2] ml-[-19px] text-black border-[1px] border-solid border-black mq750:flex-1 mq750:min-w-full mq750:ml-0">
          <div className="w-[419px] h-[268px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-black" />
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-[30px] w-[30px] relative rounded-[50%] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <div className="h-2 relative inline-block min-w-[49px] z-[1]">
                  MOUNIKA
                </div>
                <div className="h-2 relative text-darkcyan inline-block min-w-[55px] z-[1]">
                  @mounika
                </div>
              </div>
            </div>
          </div>
          <div className="w-[339px] relative text-xl capitalize font-poppins text-gray-100 inline-block max-w-full z-[1] mq450:text-base">{`describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details `}</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
