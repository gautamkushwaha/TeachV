const joinUs = () => {
  return (
    <div className="p-[30px]">
      <h1 className="font-poppins text-[20px] font-bold text-bluish m-0 uppercase">
        Be part of our journey
      </h1>
      <h2 className="font-poppins font-[500] text-[16px] text-aquablue m-0 capitalize">
        Together, We Achieve More
      </h2>
      <p className="font-poppins font-[500] text-[14px] text-blackish capitalize">
        Join us in supporting underprivileged students in your area or other
        parts of the world. Contact us to be Mentor supporter or volunteer
        today!
      </p>

      <div className="flex flex-wrap justify-evenly">
        {/* Mentor */}
        <div className="flex w-[260px] h-auto shadow-md mx-[20px] p-[10px]">
          <img
            src="./join/mentor.png"
            alt="mentor"
            className="w-[72px] h-[75px] py-[12px] px-[5px]"
          />
          <div>
            <p className="font-poppins text-blackish text-[12px] text-center capitalize">
              Are you experienced in your field and passionate about helping
              others succeed?
            </p>
            <button className="py-[5px] px-[10px] rounded-full bg-bluish text-white font-space-grotesk font-bold text-[7px] mx-[40%]">
              MENTOR
            </button>
          </div>
        </div>

        {/* supporter */}
        <div className="flex w-[260px] h-auto shadow-md mx-[20px] p-[10px]">
          <img
            src="./join/support.png"
            alt="mentor"
            className="w-[72px] h-[75px] py-[12px] px-[5px]"
          />
          <div>
            <p className="font-poppins text-blackish text-[12px] text-center capitalize">
              If you believe in our mission and want to support our efforts.
            </p>
            <button className="py-[5px] px-[10px] rounded-full bg-bluish text-white font-space-grotesk font-bold text-[7px] mx-[40%]">
              SUPPORTOR
            </button>
          </div>
        </div>

        {/* volunteer */}
        <div className="flex w-[260px] h-auto shadow-md mx-[20px] p-[10px]">
          <img
            src="./join/vol.png"
            alt="mentor"
            className="w-[72px] h-[75px] py-[12px] px-[5px]"
          />
          <div>
            <p className="font-poppins text-blackish text-[12px] text-center capitalize">
              Looking for a hands-on way to get involved?
            </p>
            <button className="py-[5px] px-[10px] rounded-full bg-bluish text-white font-space-grotesk font-bold text-[7px] mx-[40%]">
              VOLUNTEER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default joinUs;
