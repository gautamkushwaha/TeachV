const login = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center font-poppins border-solid border-black border-2 mx-[25%] my-[7%] bg-gray-500">
          <h1 className="uppercase font-bold text-[2.5vw] text-white py-10">
            user login
          </h1>
          <form>
            <input
              type="text"
              placeholder="USER NAME"
              className="bg-orange-700 placeholder-white placeholder-[24px] rounded-full p-2 h-[6vh] w-[25vw] mx-[15%] px-[5%]"
            ></input>
            <input type="password" placeholder="PASSWORD"></input>
            <br></br>
            <button>LOGIN</button>
          </form>
        </div>
      </>
    );
};
export default login;