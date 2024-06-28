const about = () => {
  return (
    <div className="bg-grayish border-y-black/10 border-x-transparent border-solid border-[0.5px]">
      <div className="p-[30px]">
        <h1 className="font-poppins text-[20px] font-bold text-bluish m-0 uppercase">about us</h1>
        <h3 className="font-poppins text-[14px] font-normal text-aquablue m-0 capitalize">
          we provide professional solutions <br /> to deliver safe & efficient projects
        </h3>
        <img src="./home/about.png" alt="about" className="h-[165px] w-full"/>
        <p className="font-poppins text-[14px] font-normal text-blackish m-0 capitalize">
          this is the space to introduce visitors to the businesses or brand.
          briefly explain who’s behind it.
        </p>
        <button className="bg-yellowish rounded-full ml-1 font-space-grotesk font-bold uppercase text-[10px] text-white py-[5px] px-[7px] mt-5">get started</button>
      </div>
    </div>
  );
};
export default about;
