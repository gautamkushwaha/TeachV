const FrameComponent6 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-black font-poppins">
      <div className="w-[1240px] flex flex-row items-start justify-start gap-[61px] max-w-full mq750:gap-[30px] mq1050:flex-wrap mq450:gap-[15px]">
        <div className="flex flex-col items-start justify-start gap-[27px] min-w-[525px] max-w-full mq750:min-w-full mq1050:flex-1">
          <h3 className="m-0 h-[26px] relative text-inherit uppercase font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 mq1050:text-10xl mq450:text-3xl">
            about us
          </h3>
          <div className="w-[510px] flex flex-col items-start justify-start gap-[8px] max-w-full text-5xl text-darkslategray">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <div className="flex-1 relative font-semibold inline-block max-w-full mq450:text-lgi">
                <span className="uppercase">w</span>
                <span className="capitalize">{`e provide professional solutions to deliver safe & efficient projects`}</span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-gray-100">
              <div className="flex-1 relative capitalize font-medium inline-block max-w-full mq450:text-lgi">
                this is the space to introduce visitors to the businesses or
                brand. briefly explain who’s behind it, what it does and what
                makes it unique. share its core values and what this site has to
                offer.
              </div>
            </div>
            <a
              href="#"
              className="rounded-31xl no-underline bg-black flex flex-row items-start justify-start pt-4 px-[18px] pb-[15px] whitespace-nowrap text-base text-white"
            >
              <div className="h-[42px] w-[135px] relative rounded-31xl bg-black hidden" />
              <b className="relative uppercase inline-block h-[15px] min-w-[100px] px-[5px] pb-[5px]">
                get started
              </b>
            </a>
          </div>
          <div className="rounded-xl bg-white overflow-x-auto flex flex-row items-start justify-start text-21xl border-[1px] border-solid border-black">
            <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[27px] pb-[19px] pr-[5px] pl-3.5 gap-[25px]">
              <div className="flex flex-row items-start justify-start py-0 px-[46px]">
                <div className="h-7 relative capitalize font-semibold inline-block min-w-[53px] mq1050:text-13xl mq450:text-5xl">
                  48
                </div>
              </div>
              <div className="relative text-base capitalize font-light">
                in - collaboration with
              </div>
            </div>
            <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-7 px-2 pb-[15px] gap-[25px] border-r-[1px] border-solid border-black border-l-[1px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[42px] pl-[43px]">
                <div className="h-7 relative capitalize font-semibold inline-block min-w-[72px] mq1050:text-13xl mq450:text-5xl">
                  282
                </div>
              </div>
              <div className="relative text-base capitalize font-light">
                projects completed
              </div>
            </div>
            <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-7 pb-[15px] pr-[17px] pl-5 gap-[25px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[47px] pl-[41px]">
                <div className="h-7 relative capitalize font-semibold inline-block min-w-[50px] mq1050:text-13xl mq450:text-5xl">
                  35
                </div>
              </div>
              <div className="relative text-base capitalize font-light">
                business partners
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[516px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[425px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/whatsapp-image-20240329-at-1631-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent6;
