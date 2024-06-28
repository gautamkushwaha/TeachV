const testimonials = () => {
  return (
    <div className="p-[30px] pb-0">
      <div className="flex justify-between">
        <h1 className="font-poppins font-bold text-[20.5px] text-bluish uppercase -mt-1 mb-0">
          testimonials
        </h1>
        <button className="w-[93px] h-[21px] py-[7px] px-[15px] relative right-10 flex uppercase rounded-full text-aquablue bg-white border-solid border-[0.5px] border-aquablue items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6.25"
            height="6.94"
            fill="currentColor"
            class="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <p className="font-poppins text-[7px] pl-1">Explore more</p>
        </button>
      </div>

      {/* testimonials */}
      <div className="flex overflow-x-scroll justify-evenly space-x-5 mt-5 pb-10">
        {/* testimonial 1 */}
        <div className="w-[150px] h-[100px] border-solid border-yellowish border-[0.2px] rounded-[5px]  py-[13px] px-[10px]">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="./home/profile.png"
                alt="profile"
                className="rounded-full object-cover w-[25px] h-[25px]"
              />
              <div className="mx-2">
                <p className="my-0 -mb-2 p-0 uppercase font-source-sans-3 text-[10px] text-blackish">
                  name
                </p>
                <a
                  href="#"
                  className="m-0 py-0 no-underline font-source-sans-3 text-[10px] text-lightblue"
                >
                  @linkedin
                </a>
              </div>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5"
            >
              <path
                d="M12.4133 12H8.92L10.2533 9.33333H8.66667V4H14V8.82667L12.4133 12ZM11.08 10.6667H11.5867L12.6667 8.50667V5.33333H10V8H12.4133L11.08 10.6667ZM5.74667 12H2.25333L3.58667 9.33333H2V4H7.33333V8.82667L5.74667 12ZM4.41333 10.6667H4.92L6 8.50667V5.33333H3.33333V8H5.74667L4.41333 10.6667Z"
                fill="#FFA500"
              />
            </svg>
          </div>
          <p className="font-poppins text-[12px] text-blackish capitalize leading-[14.4px]">
            describe the service and how customers or cilents can benefit from
            it.
          </p>
        </div>

        {/* testimonial 2 */}
        <div className="w-[150px] h-[100px] border-solid border-yellowish border-[0.2px] rounded-[5px]  py-[13px] px-[10px]">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="./home/profile.png"
                alt="profile"
                className="rounded-full object-cover w-[25px] h-[25px]"
              />
              <div className="mx-2">
                <p className="my-0 -mb-2 p-0 uppercase font-source-sans-3 text-[10px] text-blackish">
                  name
                </p>
                <a
                  href="#"
                  className="m-0 py-0 no-underline font-source-sans-3 text-[10px] text-lightblue"
                >
                  @linkedin
                </a>
              </div>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5"
            >
              <path
                d="M12.4133 12H8.92L10.2533 9.33333H8.66667V4H14V8.82667L12.4133 12ZM11.08 10.6667H11.5867L12.6667 8.50667V5.33333H10V8H12.4133L11.08 10.6667ZM5.74667 12H2.25333L3.58667 9.33333H2V4H7.33333V8.82667L5.74667 12ZM4.41333 10.6667H4.92L6 8.50667V5.33333H3.33333V8H5.74667L4.41333 10.6667Z"
                fill="#FFA500"
              />
            </svg>
          </div>
          <p className="font-poppins text-[12px] text-blackish capitalize leading-[14.4px]">
            describe the service and how customers or cilents can benefit from
            it.
          </p>
        </div>

        {/* testimonial 3 */}
        <div className="w-[150px] h-[100px] border-solid border-yellowish border-[0.2px] rounded-[5px]  py-[13px] px-[10px]">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="./home/profile.png"
                alt="profile"
                className="rounded-full object-cover w-[25px] h-[25px]"
              />
              <div className="mx-2">
                <p className="my-0 -mb-2 p-0 uppercase font-source-sans-3 text-[10px] text-blackish">
                  name
                </p>
                <a
                  href="#"
                  className="m-0 py-0 no-underline font-source-sans-3 text-[10px] text-lightblue"
                >
                  @linkedin
                </a>
              </div>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5"
            >
              <path
                d="M12.4133 12H8.92L10.2533 9.33333H8.66667V4H14V8.82667L12.4133 12ZM11.08 10.6667H11.5867L12.6667 8.50667V5.33333H10V8H12.4133L11.08 10.6667ZM5.74667 12H2.25333L3.58667 9.33333H2V4H7.33333V8.82667L5.74667 12ZM4.41333 10.6667H4.92L6 8.50667V5.33333H3.33333V8H5.74667L4.41333 10.6667Z"
                fill="#FFA500"
              />
            </svg>
          </div>
          <p className="font-poppins text-[12px] text-blackish capitalize leading-[14.4px]">
            describe the service and how customers or cilents can benefit from
            it.
          </p>
        </div>
      </div>
    </div>
  );
};
export default testimonials;
