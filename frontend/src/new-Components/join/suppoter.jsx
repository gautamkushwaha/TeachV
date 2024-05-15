import Footer from "../footer";

const suppoter = () => {
  return (
    <>
      <div className="font-poppins mx-[9.5vw]">
        <h1 className="uppercase font-bold text-[2.75vw]">supporter</h1>
        <p className="-mt-[15px] capitalize text-[1.14vw]">
          If you believe in our mission and want to support our efforts,
          consider becoming a donor or supporter. Your financial contributions
          play a crucial role in sustaining our programs, initiatives, and
          community outreach efforts. Every donation, no matter the size, helps
          us make a positive impact and create meaningful change. Together, we
          can build a brighter future for our community and beyond.
        </p>
        <div className="flex flex-row my-[2.75%]">
          <img
            src="/join/suppoter.png"
            alt="mentoring"
            className="w-[30vw] h-[75vh]"
          ></img>
          <div className="ml-[10%]  mt-[1%]">
            <h5>
              Fill out the quick form below.<br></br>
              <span className="text-[12px] font-light">
                {" "}
                It'll take just a minute, and we'll get back to you shortly.
              </span>
            </h5>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="FULL NAME"
                className="w-[25vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
              ></input>
              <input
                type="text"
                placeholder="EMAIL ID"
                className="w-[25vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
              ></input>
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="w-[25vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
              ></input>
              <textarea
                className="w-[25vw] h-[10vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] placeholder:font-poppins mb-[5%] py-3"
                placeholder="Why You Wanna Join Us"
              ></textarea>
              <button
                type="submit"
                className="w-[10vw] h-[6.5vh] bg-black text-white rounded-full mx-[25%] mt-[5%]"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default suppoter;
