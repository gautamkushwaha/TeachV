import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  useEffect(()=>{
    let lastScrollTop = 0;
        const nav = document.getElementById("harsha");

    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        console.log("Scrolling up!");
        // Your actions for scrolling up
        nav.classList.add("sticky");
      } else {
        // nav.classList.remove("sticky");
        console.log("scrolling down");
        nav.classList.remove("sticky");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  },[window])



  
  return (
    <header id='harsha' className=" self-stretch h-[75px] top-[0] z-[50] max-w-full text-left text-17xl text-white font-space-grotesk bg-black">
      <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-center py-[15px] px-5 box-border max-w-full h-full z-[2]">
        <div className="w-[1240px] overflow-hidden shrink-0 flex flex-row items-start justify-between py-0 pr-[97px] pl-0 box-border gap-[20px] max-w-full lg:pr-12 lg:box-border mq750:pr-6 mq750:box-border">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <h3 className="m-0 h-[25px] relative text-inherit font-bold font-inherit inline-block min-w-[120px] whitespace-nowrap">
              EdPark
            </h3>
          </div>

          <nav className="m-0 flex flex-row items-start justify-start max-w-full text-left text-lg text-white font-space-grotesk">
            <div className="flex flex-row items-start justify-start pt-[15px] pb-[3px] pr-3 pl-[13px]">
              <Link to="/"
                className="relative no-underline text-white capitalize inline-block min-w-[50px]"
              >
                Home
              </Link>
            </div>
            <div className="flex flex-row items-start justify-start py-[9px] pr-3 pl-[13px]">
              <a
                href="#"
                className="flex flex-row no-underline text-white items-start justify-start"
              >
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <b className="h-[13px] relative inline-block min-w-[70px]">
                    Courses
                  </b>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[2] ml-[-2.5px] pt-[8px]"
                >
                  <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className="flex flex-row items-start justify-start py-[9px] px-[18px]">
              <a
                href="#"
                className="flex flex-row no-underline text-white items-start justify-start"
              >
                <div className="h-6 flex flex-col capitalize items-start justify-start pt-[5px] px-0 pb-0 box-border">
                  <b className="relative shrink-0">Collaboration</b>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] pt-[8px] z-[1] ml-[-1.9px]"
                >
                  <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className="flex flex-row items-start justify-start pt-3.5 pb-[9px] pr-4 pl-[17px]">
              <Link
                to="/blog"
                className="relative capitalize no-underline text-white inline-block min-w-[46px]"
              >
                blog
              </Link>
            </div>
            <div className="flex flex-row items-start justify-start pt-[15px] px-[19px] pb-[3px]">
              <a
                href="#"
                className="relative no-underline text-white capitalize inline-block min-w-[86px] whitespace-nowrap"
              >
                about us
              </a>
            </div>
            <Link to="/registration"
              className="flex flex-row no-underline text-white items-start justify-start m-[10px] bg-orangered rounded-full"
            >
              <b className="relative uppercase inline-block min-w-[86px] pl-[15px] py-[5px] whitespace-nowrap">
                SIGN UP
              </b>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
