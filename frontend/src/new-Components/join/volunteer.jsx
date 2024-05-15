const volunteer = () => {
  return (
    <div className="font-poppins mx-[9.5vw]">
      <h1 className="uppercase font-bold text-[2.75vw]">Volunteer</h1>
      <p className="-mt-[15px] capitalize text-[1.14vw]">
        Looking for a hands-on way to get involved? Join us as a volunteer and
        contribute your time, skills, and energy to support our various projects
        and activities. Whether you're interested in event planning,
        fundraising, outreach, or administrative tasks, there's a volunteer
        opportunity that suits your interests and availability. Volunteering is
        a fantastic way to meet new people, gain valuable experience, and make a
        difference in the lives of others.
      </p>
      <div className="flex flex-row">
        <img
          src="/join/volunteer.png"
          alt="mentoring"
          className="w-[45vw] h-[63vh]"
        ></img>
        <div className="ml-[10%]">
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
            <textarea
              className="w-[22vw] h-[10vh] rounded-lg bg-neutral-200 px-[5%] placeholder:text-black placeholder:text-[11px] placeholder:font-poppins mb-[5%] py-3"
              placeholder="Why You Wanna Join Us"
            ></textarea>
            <button
              type="submit"
              className="w-[10vw] h-[6.5vh] bg-black text-white rounded-full mx-[25%]"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default volunteer;
