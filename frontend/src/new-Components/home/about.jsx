const about = () => {
    return (
      <>
        {/* About Us */}
        <section className="flex flex-row relative font-poppins top-[7vh]">
          {/* left container */}
          <div className="w-2/5 pl-[150px]">
            <h1 className=" text-[36px] font-bold ">ABOUT US</h1>
            <p className="text-neutral-800 text-[22px] capitalize left-[2px] font-semibold -mt-[18px]">
              we provide professional solutions to deliver safe & efficient
              projects
            </p>
            <p className="text-zinc-500 text-[19px] capitalize font-medium -mt-[10px]">
              this is the space to introduce visitors to the businesses or
              brand. briefly explain who’s behind it, what it does and what
              makes it unique. share its core values and what this site has to
              offer.
            </p>
            <button className="w-[141px] h-[42px] bg-black text-white rounded-full font-bold">
              GET STARTED
            </button>
            <div className="flex flex-row">
              <div className="border-solid border-black border-[1px] my-[25px] w-[160px] h-[105px] rounded-l-xl">
                <div className="text-[35px] font-semibold px-12 pt-2">48</div>
                <div className="text-[14px] font-normal px-0.5">
                  In - Collaboration with
                </div>
              </div>
              <div className="border-solid border-black border-[1px] border-x-0 my-[25px] w-[160px] h-[105px]">
                <div className="text-[35px] font-semibold px-12 pt-2">282</div>
                <div className="text-[14px] font-normal px-2">
                  Projects Completed
                </div>
              </div>
              <div className="border-solid border-black border-[1px] my-[25px] w-[160px] h-[105px] rounded-r-xl">
                <div className="text-[35px] font-semibold px-12 pt-2">35</div>
                <div className="text-[14px] font-normal px-4">
                  Business Partners
                </div>
              </div>
            </div>
          </div>
          {/* right container  */}
          <div>
            <img
              src="/home/about.png"
              alt="about"
              className="h-[456px] w-[560px] pl-[10px] py-[30px]"
            ></img>
          </div>
        </section>
      </>
    );
}
export default about;