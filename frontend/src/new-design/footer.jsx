const footer = () => {
  return (
    <div className="bg-aquablue p-[30px]">
      <h1 className="m-0 font-poppins font-bold text-[20px] text-white uppercase">
        Teach Your Village
      </h1>
      <p className="m-0 font-poppins text-[14px] text-white capitalize font-normal">
        this is the space to introduce visitors to the businesses or brand.
      </p>

      <div className="text-white font-poppins flex flex-wrap tablet:justify-between">
        {/* information */}
        <div className="mr-10 tablet:mr-0">
          {/* get in touch */}
          <h2 className="font-[500] text-[16px]">GET IN TOUCH</h2>
          <div className="flex items-center space-x-1">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.725 1.08333C1.75 1.45417 1.8125 1.81667 1.9125 2.1625L1.4125 2.6625C1.24167 2.1625 1.13333 1.63333 1.09583 1.08333H1.725ZM5.83333 6.09167C6.1875 6.19167 6.55 6.25417 6.91667 6.27917V6.9C6.36667 6.8625 5.8375 6.75417 5.33333 6.5875L5.83333 6.09167ZM2.125 0.25H0.666667C0.4375 0.25 0.25 0.4375 0.25 0.666667C0.25 4.57917 3.42083 7.75 7.33333 7.75C7.5625 7.75 7.75 7.5625 7.75 7.33333V5.87917C7.75 5.65 7.5625 5.4625 7.33333 5.4625C6.81667 5.4625 6.3125 5.37917 5.84583 5.225C5.80417 5.20833 5.75833 5.20417 5.71667 5.20417C5.60833 5.20417 5.50417 5.24583 5.42083 5.325L4.50417 6.24167C3.325 5.6375 2.35833 4.675 1.75833 3.49583L2.675 2.57917C2.79167 2.4625 2.825 2.3 2.77917 2.15417C2.625 1.6875 2.54167 1.1875 2.54167 0.666667C2.54167 0.4375 2.35417 0.25 2.125 0.25Z"
                fill="white"
              />
            </svg>
            <p className="font-normal text-[12px] m-0">+91 5693696408</p>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16671 2.50008C9.16671 2.04175 8.79171 1.66675 8.33337 1.66675H1.66671C1.20837 1.66675 0.833374 2.04175 0.833374 2.50008V7.50008C0.833374 7.95841 1.20837 8.33341 1.66671 8.33341H8.33337C8.79171 8.33341 9.16671 7.95841 9.16671 7.50008V2.50008ZM8.33337 2.50008L5.00004 4.57925L1.66671 2.50008H8.33337ZM8.33337 7.50008H1.66671V3.33341L5.00004 5.41675L8.33337 3.33341V7.50008Z"
                fill="white"
              />
            </svg>
            <p className="font-[400] text-[12px] m-0">
              teachyourvillage@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00004 0.833252C3.38754 0.833252 2.08337 2.13742 2.08337 3.74992C2.08337 5.93742 5.00004 9.16659 5.00004 9.16659C5.00004 9.16659 7.91671 5.93742 7.91671 3.74992C7.91671 2.13742 6.61254 0.833252 5.00004 0.833252ZM2.91671 3.74992C2.91671 2.59992 3.85004 1.66659 5.00004 1.66659C6.15004 1.66659 7.08337 2.59992 7.08337 3.74992C7.08337 4.94992 5.88337 6.74575 5.00004 7.86659C4.13337 6.75409 2.91671 4.93742 2.91671 3.74992Z"
                fill="white"
              />
              <path
                d="M5.00004 4.79159C5.57534 4.79159 6.04171 4.32522 6.04171 3.74992C6.04171 3.17462 5.57534 2.70825 5.00004 2.70825C4.42474 2.70825 3.95837 3.17462 3.95837 3.74992C3.95837 4.32522 4.42474 4.79159 5.00004 4.79159Z"
                fill="white"
              />
            </svg>
            <p className="font-normal text-[12px] m-0">DIGIFAC First Floor</p>
          </div>
        </div>

        {/* HOME */}
        <div className="tablet:mr-0 tablet:mt-4 text-center mr-5 my-5">
          <h3 className="font-[500] text-[16px] p-0 m-0">HOME</h3>
          <div className="flex flex-col">
            <a
              href="#"
              className="pt-[5px] font-[400] text-[12px] m-0  no-underline text-white"
            >
              HOME
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              COURSES
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              CONTACT US
            </a>
          </div>
        </div>

        {/* COURSES */}
        <div className="tablet:mr-0 tablet:mt-4 text-center mr-5 my-5">
          <h3 className="font-[500] text-[16px] p-0 m-0">COURSES</h3>
          <div className="flex flex-col">
            <a
              href="#"
              className="pt-[5px] font-[400] text-[12px] m-0  no-underline text-white"
            >
              AI/ML
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              AR & VR
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              WEB DEVELOPMENT
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              DATA SCIENCE
            </a>
          </div>
        </div>

        {/* JOIN US */}
        <div className="tablet:mr-0 tablet:mt-4 text-center  my-5">
          <h3 className="font-[500] text-[16px] p-0 m-0">JOIN US</h3>
          <div className="flex flex-col">
            <a
              href="#"
              className="pt-[5px] font-[400] text-[12px] m-0  no-underline text-white"
            >
              MENTOR
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              SUPPORTOR
            </a>
            <a
              href="#"
              className="font-[400] text-[12px] m-0  no-underline text-white"
            >
              VOLUNTEER
            </a>
          </div>
        </div>
      </div>
      <p className=" font-poppins text-white text-[12px] mt-0 text-center">
        © 2024 EDPark, All Rights Reserved.
      </p>
    </div>
  );
};
export default footer;
