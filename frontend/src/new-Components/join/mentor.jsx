import Footer from "../footer";

const mentor = () => {
  return (
    <>
    <div className="font-poppins mx-[9.5vw]">
      <h1 className="uppercase font-bold text-[2.75vw]">Mentoring</h1>
      <p className="-mt-[15px] capitalize text-[1.14vw]">
        Are you experienced in your field and passionate about helping others
        succeed? Join us as a mentor and share your knowledge, skills, and
        insights with aspiring individuals. Whether you're a professional in
        business, technology, education, or any other field, your guidance can
        make a significant difference in someone's life. Mentorship is a
        rewarding way to give back and contribute to the growth and development
        of others.
      </p>
      <div className="flex flex-row mt-[3%]">
        <img
          src="/join/mentoring.png"
          alt="mentoring"
          className="mt-[5%] w-[45vw] h-[50vh]"
        ></img>
        <div className="ml-[10%] -mt-[3%]">
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
              className="w-[22vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
            ></input>
            <input
              type="text"
              placeholder="EMAIL ID"
              className="w-[22vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
            ></input>
            <input
              type="text"
              placeholder="PHONE NUMBER"
              className="w-[22vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
            ></input>
            <input
              type="text"
              placeholder="SPECIALIZATION"
              className="w-[22vw] h-[6.5vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] mb-[5%]"
            ></input>
            <textarea
              className="w-[22vw] h-[10vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] placeholder:font-poppins mb-[5%] py-3"
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
    <Footer/>
    </>
  );
};
export default mentor;
