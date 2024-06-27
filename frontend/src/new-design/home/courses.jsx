const courses = () => {
  return (
    <div className="px-[30px] py-[50px] relative">
      <div className="flex justify-between">
        <h1 className="font-poppins font-bold text-[20.5px] text-bluish uppercase -mt-1 mb-0">
          Courses
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
      <p className="capitalize font-[500] font-poppins text-[16px] text-aquablue m-0">
        Learn at Your Own Pace
      </p>

      {/* Courses 1*/}
      <div className="flex flex-wrap justify-evenly">
        <div className="w-[241px] h-auto rounded-lg p-2.5 bg-grayish border-solid border-[0.2px] border-blackish/50 relative top-4 mb-5">
          <img
            src="./courses/web-dev.png"
            alt="web-dev"
            className="w-[241px] h-[158px] rounded-lg object-cover"
          />

          <div className="flex">
            <p className="font-poppins font-[500] text-[13.95px] my-1.5">
              WEB DEVELOPMENT
            </p>
            <div className="w-[90px] h-[20px] gap-2 ml-[20px] bg-greenish/50 rounded-full font-poppins text-[12px] text-greenish my-1.5 flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.5H10.5V17.5H7.5V11.5ZM13.5 6.5H16.5V17.5H13.5V6.5Z"
                  fill="greenish"
                />
              </svg>
              <p className=" my-0.5"> Beginner </p>
            </div>
          </div>
          <p className="capitalize font-poppins text-[12px] text-blackish leading-4">
            revolutionize your business with our aI solutions. revolutionize
            your business with our aI solutions
          </p>

          <div className="flex items-center">
            <button className="w-[80px] h-[30px] text-white uppercase bg-bluish rounded-full font-bold text-[16px] font-space-grotesk py-[5px] px-[15px] mr-5">
              Enrol
            </button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59042 0.680574C9.77621 0.371856 10.2238 0.371856 10.4096 0.680573L13.1872 5.29599C13.2539 5.40689 13.3628 5.48599 13.4889 5.5152L18.7367 6.73061C19.0878 6.81191 19.2261 7.23757 18.9899 7.50967L15.4587 11.5776C15.3738 11.6753 15.3322 11.8033 15.3434 11.9323L15.8092 17.2988C15.8403 17.6578 15.4782 17.9209 15.1465 17.7803L10.1865 15.679C10.0673 15.6285 9.93272 15.6285 9.81353 15.679L4.85353 17.7803C4.52177 17.9209 4.15967 17.6578 4.19083 17.2988L4.65657 11.9323C4.66777 11.8033 4.62618 11.6753 4.54133 11.5776L1.01013 7.50967C0.773938 7.23757 0.912245 6.81191 1.26326 6.73061L6.51111 5.5152C6.63721 5.48599 6.74608 5.40689 6.81283 5.29599L9.59042 0.680574Z"
                fill="#C6EB5D"
              />
            </svg>
            <p className="font-roboto font-bold text-[14px] m-0 pl-1">
              4.5 (120 Reviews)
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[241px] h-auto rounded-lg p-2.5 bg-grayish border-solid border-[0.2px] border-blackish/50 relative top-4 mb-5">
          <img
            src="./courses/data-science.png"
            alt="web-dev"
            className="w-[241px] h-[158px] rounded-lg object-cover"
          />

          <div className="flex">
            <p className="font-poppins font-[500] text-[13.95px] my-1.5">
              DATA SCIENCE
            </p>
            <div className="w-[90px] h-[20px] gap-2 ml-[20px] bg-greenish/50 rounded-full font-poppins text-[12px] text-greenish my-1.5 flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.5H10.5V17.5H7.5V11.5ZM13.5 6.5H16.5V17.5H13.5V6.5Z"
                  fill="greenish"
                />
              </svg>
              <p className=" my-0.5"> Beginner </p>
            </div>
          </div>
          <p className="capitalize font-poppins text-[12px] text-blackish leading-4">
            revolutionize your business with our aI solutions. revolutionize
            your business with our aI solutions
          </p>

          <div className="flex items-center">
            <button className="w-[80px] h-[30px] text-white uppercase bg-bluish rounded-full font-bold text-[16px] font-space-grotesk py-[5px] px-[15px] mr-5">
              Enrol
            </button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59042 0.680574C9.77621 0.371856 10.2238 0.371856 10.4096 0.680573L13.1872 5.29599C13.2539 5.40689 13.3628 5.48599 13.4889 5.5152L18.7367 6.73061C19.0878 6.81191 19.2261 7.23757 18.9899 7.50967L15.4587 11.5776C15.3738 11.6753 15.3322 11.8033 15.3434 11.9323L15.8092 17.2988C15.8403 17.6578 15.4782 17.9209 15.1465 17.7803L10.1865 15.679C10.0673 15.6285 9.93272 15.6285 9.81353 15.679L4.85353 17.7803C4.52177 17.9209 4.15967 17.6578 4.19083 17.2988L4.65657 11.9323C4.66777 11.8033 4.62618 11.6753 4.54133 11.5776L1.01013 7.50967C0.773938 7.23757 0.912245 6.81191 1.26326 6.73061L6.51111 5.5152C6.63721 5.48599 6.74608 5.40689 6.81283 5.29599L9.59042 0.680574Z"
                fill="#C6EB5D"
              />
            </svg>
            <p className="font-roboto font-bold text-[14px] m-0 pl-1">
              4.5 (120 Reviews)
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[241px] h-auto rounded-lg p-2.5 bg-grayish border-solid border-[0.2px] border-blackish/50 relative top-4 mb-5">
          <img
            src="./courses/ar.png"
            alt="web-dev"
            className="w-[241px] h-[158px] rounded-lg object-cover"
          />

          <div className="flex">
            <p className="font-poppins font-[500] text-[13.95px] my-1.5">
              AR & VR
            </p>
            <div className="w-[90px] h-[20px] gap-2 ml-[20px] bg-greenish/50 rounded-full font-poppins text-[12px] text-greenish my-1.5 flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.5H10.5V17.5H7.5V11.5ZM13.5 6.5H16.5V17.5H13.5V6.5Z"
                  fill="greenish"
                />
              </svg>
              <p className=" my-0.5"> Beginner </p>
            </div>
          </div>
          <p className="capitalize font-poppins text-[12px] text-blackish leading-4">
            revolutionize your business with our aI solutions. revolutionize
            your business with our aI solutions
          </p>

          <div className="flex items-center">
            <button className="w-[80px] h-[30px] text-white uppercase bg-bluish rounded-full font-bold text-[16px] font-space-grotesk py-[5px] px-[15px] mr-5">
              Enrol
            </button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59042 0.680574C9.77621 0.371856 10.2238 0.371856 10.4096 0.680573L13.1872 5.29599C13.2539 5.40689 13.3628 5.48599 13.4889 5.5152L18.7367 6.73061C19.0878 6.81191 19.2261 7.23757 18.9899 7.50967L15.4587 11.5776C15.3738 11.6753 15.3322 11.8033 15.3434 11.9323L15.8092 17.2988C15.8403 17.6578 15.4782 17.9209 15.1465 17.7803L10.1865 15.679C10.0673 15.6285 9.93272 15.6285 9.81353 15.679L4.85353 17.7803C4.52177 17.9209 4.15967 17.6578 4.19083 17.2988L4.65657 11.9323C4.66777 11.8033 4.62618 11.6753 4.54133 11.5776L1.01013 7.50967C0.773938 7.23757 0.912245 6.81191 1.26326 6.73061L6.51111 5.5152C6.63721 5.48599 6.74608 5.40689 6.81283 5.29599L9.59042 0.680574Z"
                fill="#C6EB5D"
              />
            </svg>
            <p className="font-roboto font-bold text-[14px] m-0 pl-1">
              4.5 (120 Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default courses;
