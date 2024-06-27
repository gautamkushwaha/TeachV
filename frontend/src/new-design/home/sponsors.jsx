const sponsors = () => {
  return (
    <div className="p-[30px]">
      <div className="flex justify-between">
        <h1 className="font-poppins font-bold text-[20px] text-orangish-100 uppercase -mt-1 mb-0">
          our sponsors
        </h1>
        <button className="w-[120px] h-[30px] py-[7px] px-[15px] relative right-3 flex uppercase rounded-full text-orangish-200 bg-white border-solid border-[0.5px] border-orangish-200 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11.11"
            fill="currentColor"
            class="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <p className="font-poppins text-[10px] pl-1">Explore more</p>
        </button>
      </div>

      {/* sponsors */}
      <div className="flex flex-wrap justify-around py-5">
        <img
          src="./sponsors/reebok.png"
          alt=""
          className="w-[100px] h-[100px] p-[25px]"
        />
        <img
          src="./sponsors/puma.png"
          alt=""
          className="w-[100px] h-[100px] p-[25px]"
        />
        <img
          src="./sponsors/playstation.png"
          alt=""
          className="w-[100px] h-[100px] p-[25px]"
        />
        <img
          src="./sponsors/tesla.png"
          alt=""
          className="w-[100px] h-[100px] p-[25px]"
        />
      </div>
    </div>
  );
};
export default sponsors;
