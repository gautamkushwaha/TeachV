import FrameComponent5 from "./FrameComponent5";

const FrameComponent4 = () => {
  return (
    <section className="self-stretch bg-snow box-border flex flex-col items-start justify-start py-12 px-[100px] gap-[20px] max-w-full text-left text-5xl text-gray-100 font-poppins border-t-[1px] border-solid border-gray-300 border-b-[1px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq1050:pt-[31px] mq1050:pb-[31px] mq1050:box-border mq450:p-5 mq450:box-border">
      <div className="w-[1440px] h-[882px] relative bg-snow box-border hidden max-w-full border-t-[1px] border-solid border-gray-300 border-b-[1px]" />
      <div className="flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative uppercase z-[1] mq450:text-lgi">
          featured projects
        </b>
        <h3 className="m-0 relative text-17xl capitalize font-semibold font-inherit text-black z-[1] mq1050:text-10xl mq450:text-3xl">
          we build projects that last
        </h3>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[19px] max-w-full text-black">
        <div className="flex-1 flex flex-row items-start justify-start gap-[19px] min-w-[396px] max-w-full mq750:flex-wrap mq750:min-w-full">
          <FrameComponent5
            screenshot862="/screenshot-86-2@2x.png"
            aIML={`aI & mL`}
            revolutionizeYourBusiness="revolutionize your business with our aI solutions"
          />
          <FrameComponent5
            screenshot862="/screenshot-86-1@2x.png"
            aIML={`ar & vr`}
            revolutionizeYourBusiness={`transform your reality with aR & VR solutions`}
            propMinWidth="96px"
            propHeight="53px"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[397px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[20.7px] mq750:flex-wrap">
            <img
              className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-w-[192px] min-h-[415px] z-[1]"
              loading="lazy"
              alt=""
              src="/screenshot-117-1@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-w-[192px] min-h-[415px] z-[1]"
              loading="lazy"
              alt=""
              src="/screenshot-118-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="w-[544px] flex flex-col items-start justify-start max-w-full">
              <div className="relative uppercase font-semibold z-[1] mq450:text-lgi">
                data science
              </div>
              <div className="self-stretch flex flex-row items-start justify-end mt-[-27px]">
                <div className="relative uppercase ml-[-15px] font-semibold z-[1] mq450:text-lgi">
                  web development
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-gray-100 mq750:flex-wrap">
              <div className="h-[53px] flex-1 relative capitalize inline-block min-w-[192px] z-[1] mq450:text-lgi">
                unlocking insights with innovative data science
              </div>
              <div className="flex-1 flex flex-col items-start justify-start px-0 pb-0 box-border min-w-[192px]">
                <div className="self-stretch h-[89px] relative capitalize inline-block z-[1] mq450:text-lgi">
                  creating your digital pathway to success with edpark
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px text-base text-white">
        <div className="rounded-31xl bg-black overflow-hidden flex flex-row items-start justify-start pt-4 px-[17px] pb-0.5 whitespace-nowrap z-[1]">
          <div className="h-[42px] w-[155px] relative rounded-31xl bg-black hidden" />
          <a
            href="#"
            className="relative no-underline text-white uppercase inline-block min-w-[121px] z-[1] pb-[7px] px-[2px]"
          >
            explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
