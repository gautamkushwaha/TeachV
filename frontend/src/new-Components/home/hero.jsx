const hero = () => {
    return (
      <>
        {/* Hero section */}
        <section className="text-white font-poppins">
          <img
            src="/home/hero.png"
            alt="hero image"
            className="h-[80vh] w-full relative object-cover"
          ></img>
          <h1 className="absolute top-0 left-[9.5vw] text-[4.25vw] capitalize z-10">
            <p>building vision,</p>
            <p className="-mt-[11%]"> shaping the future</p>
          </h1>
          <h3 className="absolute left-[9.5vw] top-[40vh] capitalize text-[1.5vw] font-normal">
            start learning with edPark’s free courses
          </h3>
          <button className=" w-[9.75vw] h-[6.25vh] left-[9.5vw] top-[55vh] text-[1.25vw] bg-orangered absolute p-2 font-white rounded-full text-white font-space-grotesk font-semibold">
            GET STARTED
          </button>
        </section>
      </>
    );
}
export default hero;