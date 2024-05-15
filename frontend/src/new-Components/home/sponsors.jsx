const sponsors = () => {
    return (
      <>
        {/* Sponsors */}
        <section className="top-[50px] w-full h-[467px] relative font-poppins border-solid border-t-2 border-t-zinc-100">
          <h1 className="text-[34px] font-semibold pt-[50px] pl-[150px]">
            OUR SPONSORS
          </h1>
          <div className="flex flex-row px-[140px] justify-between">
            <img
              src="/sponsors/reebok.png"
              alt="reebok"
              className="w-[200px] h-[200px]"
            ></img>
            <img
              src="/sponsors/puma.png"
              alt="puma"
              className="w-[200px] h-[200px]"
            ></img>
            <img
              src="/sponsors/playstation.png"
              alt="playstation"
              className="w-[190px] h-[190px]"
            ></img>
            <img
              src="/sponsors/tesla.png"
              alt="tesla"
              className="w-[190px] h-[190px]"
            ></img>
          </div>
          <button className="bg-black text-white h-[42px] w-[155px] rounded-full font-inter font-bold ml-[44%] mt-10 mb-[130px]">
            EXPLORE MORE
          </button>
        </section>
      </>
    );
};
export default sponsors;