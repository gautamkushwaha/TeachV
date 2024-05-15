const courses = () => {
    return (
      <>
        {/* Courses */}
        <section className="top-[50px] w-full h-[700px] relative font-poppins border-solid border-t-2 border-t-zinc-100">
          <h1 className="pl-[150px] font-bold text-[33px] pt-[40px] text-neutral-500">
            COURSES
          </h1>
          <p className="px-[150px] font-semibold text-[22px] -mt-5">
            Learn At Your Place
          </p>
          <div className="flex flex-row justify-between mx-[150px] mt-[40px]">
            <div>
              <img
                src="/courses/ai.png"
                alt="ai-ml"
                className="w-[250px] h-[253px]"
              ></img>
              <h3 className="text-[20px] font-semibold mt-1">AI & ML </h3>
              <p className="capitalize w-[250px] text-gray-100 text-[15px] -mt-3">
                revolutionize your business with our aI solutions
              </p>
            </div>

            <div>
              <img
                src="/courses/ar.png"
                alt="ar-vr"
                className="w-[250px] h-[253px]"
              ></img>
              <h3 className="text-[20px] font-semibold mt-1"> AR & VR </h3>
              <p className="capitalize w-[250px] text-gray-100 text-[15px] -mt-3">
                transform your reality with aR & VR solutions
              </p>
            </div>

            <div>
              <img
                src="/courses/data-science.png"
                alt="data-science"
                className="w-[250px] h-[253px]"
              ></img>
              <h3 className="text-[20px] font-semibold mt-1"> DATA SCIENCE </h3>
              <p className="capitalize w-[250px] text-gray-100 text-[15px] -mt-3">
                unlocking insights with innovative data science
              </p>
            </div>

            <div>
              <img
                src="/courses/web-dev.png"
                alt="web-dev"
                className="w-[250px] h-[253px]"
              ></img>
              <h3 className="text-[20px] font-semibold mt-1">
                WEB DEVELOPMENT
              </h3>
              <p className="capitalize w-[250px] text-gray-100 text-[15px] -mt-3">
                creating your digital pathway to success with edpark
              </p>
            </div>
          </div>
          <button className="bg-black text-white h-[42px] w-[155px] rounded-full font-inter font-bold ml-[44%] mt-10 mb-[130px]">
            EXPLORE MORE
          </button>
        </section>
      </>
    );
}
export default courses;