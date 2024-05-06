const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full text-left text-17xl text-black font-poppins">
      <div className="w-[1241px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq1050:text-10xl mq450:text-3xl">
          oUR SPONSORS
        </h3>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap mq1050:justify-center">
          <img
            className="h-[200px] w-[200px] relative object-cover min-h-[200px]"
            loading="lazy"
            alt=""
            src="/sponsors/reebok.png"
          />
          <img
            className="h-[200px] w-[200px] relative object-cover min-h-[200px]"
            loading="lazy"
            alt=""
            src="/sponsors/puma.png"
          />
          <img
            className="h-[200px] w-[200px] relative object-cover min-h-[200px]"
            loading="lazy"
            alt=""
            src="/sponsors/playstation.png"
          />
          <img
            className="h-[200px] w-[200px] relative object-cover min-h-[200px]"
            loading="lazy"
            alt=""
            src="/sponsors/tesla.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
