const join = () => {
    return (
      <>
        {/* Join Us */}
        <section className="bg-amber-50 top-[50px] w-full h-[650px] relative font-poppins border-solid border-t-2 border-t-zinc-100">
          <h1 className="text-orange-800 font-bold text-[33px] pt-[35px] pl-[150px] ">
            JOIN US
          </h1>
          <p className="font-inter capitalize text-[16px] -mt-2 font-medium pl-[160px]">
            Join us in supporting underprivileged students in your area or other
            parts of the world. Contact us to be Mentor supporter or volunteer
            today!
          </p>
          <div className="flex flex-row justify-around px-[75px] py-[25px]">
            <div>
              <img
                className="h-[240px] w-[240px]"
                src="/home/join1.png"
                alt="mentor"
              ></img>
              <p className="bg-orangered w-[90px] rounded-lg text-white font-bold text-[22px] px-4 py-1 ml-[20%]">
                MENTOR
              </p>
              <p className="px-[2.5%]">DESCRIPTION ABOUT MENTOR</p>
            </div>
            <div>
              <img
                className="h-[240px] w-[240px]"
                src="/home/join2.png"
                alt="supporter"
              ></img>
              <p className="bg-orangered w-[130px] rounded-lg text-white font-bold text-[22px] px-4 py-1 ml-[15%]">
                SUPPORTOR
              </p>
              <p className="px-[2.5%]">DESCRIPTION ABOUT MENTOR</p>
            </div>
            <div>
              <img
                className="h-[240px] w-[240px]"
                src="/home/join3.png"
                alt="volunteer"
              ></img>
              <p className="bg-orangered w-[130px] rounded-lg text-white font-bold text-[22px] px-4 py-1 ml-[18%]">
                VOLUNTEER
              </p>
              <p className="px-[2.5%]">DESCRIPTION ABOUT MENTOR</p>
            </div>
          </div>
        </section>
      </>
    );
}
export default join;