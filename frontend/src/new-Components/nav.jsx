const nav = () =>{
    return (
      <div className="font-space-grotesk uppercase text-bluish flex justify-around sticky top-[0] z-[99] py-2 bg-white border-solid border-bluish border-b-[2px]">
        <h2 className="capitalize">teach your village</h2>
        <div>
          <h3 className="text-[1.2vw] mt-6">courses &#11206;</h3>
        </div>
        <input
          type="text"
          placeholder="what you want to learn"
          className="w-[13vw] border-solid border-bluish border-[2px] rounded-full h-[6vh] mt-3 px-9 placeholder:capitalize placeholder:text-bluish placeholder:opacity-40"
        />
        <div className="absolute mt-[2%] -ml-[34%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <h3 className="text-[1.2vw] mt-6">home</h3>
        <h3 className="text-[1.2vw] mt-6">blog</h3>
        <h3 className="text-[1.2vw] mt-6">about us</h3>
        <h3 className="text-[1.2vw] mt-6">contact us</h3>
        <div className="mt-2">
          <button
            type="submit"
            className="w-[5vw] h-[5vh] text-white bg-bluish uppercase text-[1vw] mt-3"
          >
            sign up
          </button>
          <button
            type="submit"
            className="w-[5vw] h-[5vh] text-white bg-bluish uppercase text-[1vw] opacity-40 mt-3"
          >
            log in
          </button>
        </div>
      </div>
    );
};
export default nav;