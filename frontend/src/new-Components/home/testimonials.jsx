const testimonials = () => {
    return (
      <>
        {/* Testimonials */}
        <section className="top-[50px] w-full h-[625px] relative font-poppins bg-amber-50 border-solid border-t-2 border-t-zinc-100">
          <h1 className="pl-[150px] font-bold text-[33px] pt-[40px] text-neutral-500">
            TESTIMONIALS
          </h1>
          <div className="flex flex-row justify-between mx-[150px] mt-[40px]">
            <div className="w-[330px] h-[222px] bg-orange-400 border-solid rounded-xl pb-4 px-5  mx-[10px]">
              <img></img>
              <p className="uppercase text-white font-source-sans-3 font-normal text-[16px] -mb-1.5">
                name
              </p>
              <a
                href="#"
                className="lowercase text-blue-300 no-underline font-source-sans-3 text-[12px] bottom-5"
              >
                @LinkedIn
              </a>
              <p className="capitalize text-white font-poppins text-[16px] font-normal -mt-0">
                describe the service and how customers or cilents can benefit
                from it. it’s an oppurtunity to add a short description with
                relevant details{" "}
              </p>
            </div>

            <div className="w-[330px] h-[222px] bg-indigo-100 border-solid rounded-xl pb-4 px-5  mx-[10px]">
              <img></img>
              <p className="uppercase text-black font-source-sans-3 font-normal text-[16px] -mb-1.5">
                name
              </p>
              <a
                href="#"
                className="lowercase text-blue-300 no-underline font-source-sans-3 text-[12px] bottom-5"
              >
                @LinkedIn
              </a>
              <p className="capitalize text-black font-poppins text-[16px] font-normal -mt-0">
                describe the service and how customers or cilents can benefit
                from it. it’s an oppurtunity to add a short description with
                relevant details{" "}
              </p>
            </div>

            <div className="w-[330px] h-[222px] bg-zinc-200 border-solid rounded-xl pb-4 px-5  mx-[10px]">
              <img></img>
              <p className="uppercase text-black font-source-sans-3 font-normal text-[16px] -mb-1.5">
                name
              </p>
              <a
                href="#"
                className="lowercase text-blue-300 no-underline font-source-sans-3 text-[12px] bottom-5"
              >
                @LinkedIn
              </a>
              <p className="capitalize text-black font-poppins text-[16px] font-normal -mt-0">
                describe the service and how customers or cilents can benefit
                from it. it’s an oppurtunity to add a short description with
                relevant details{" "}
              </p>
            </div>
          </div>
          <button className="bg-black text-white h-[42px] w-[155px] rounded-full font-inter font-bold ml-[44%] mt-10 mb-[130px]">
            SEE MORE
          </button>
        </section>
      </>
    );
}
export default testimonials;