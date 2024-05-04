import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional, adds smooth scrolling animation
  });
};

const Footer = () => {
  return (
    <footer className=" md:pl-10 py-10 z-50 bg-[#2F2B36]  text-white   mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 sm:gap-x-10 md:gap-x-20 lg:gap-x-[80px] px-10 md:px-10 lg:px-5">
          {/* Column 1 */}
          <div className="  mb-4 md:mb-0">
          <Link to="/" onClick={scrollToTop}><h3 className=" text-xl md:text-2xl font-semibold mb-3">Teach Your Village</h3></Link>
            {/* <img
              src="/footer/E-Verify_Logo-2x.png"
              alt="company_verification"
              className="h-8 md:h-10 mb-3 "
            /> */}
            <p className="mb-3">
            Bridging the gap of education in urban and rural areas through use of technology..
            </p>
          </div>


          {/* Column 3 */}
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-3">Important Links</h3>
           
            <a href="/contact" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]">Home</a>
            <br></br> 
            <a  href="/contact" className="text-[15px] md:text-[16px] mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1">Courses</a>

            <br></br>
            <a href="/contact" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]"> Collaboration
            </a>
            <br></br>
            <a href="/contact" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]"> 
            Blog
            </a>
            <br></br>
            <a href="/contact" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]"> About Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="mb-4 md:mb-0  ">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="">
              <a
                href="https://www.linkedin.com/in/refyn-d-47489b21/"
                className="inline-flex mb-3 transform transition-transform hover:translate-y-[-5px] "
                target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 my-auto text-[#0A66C2]"/>LinkedIn 
                  
              </a>
              {/* <a href="#" className=" block mb-3 transform transition-transform hover:translate-y-[-5px]">
                Twitter
              </a>
              <a href="#" className="mb-3  block transform transition-transform hover:translate-y-[-5px]">
                Facebook
              </a> */}
            </div>
          </div>
        </div>
        {/* Line below the footer */}
        <div className="border-t border-gray-600 my-4 mx-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center text-[#0B1320]">
              <p className="text-xs ">Refyndata @ 2024 All rights reserved</p>
              <div className="flex space-x-4">
                <a href="#" className=" text-xs">
                  Terms and Conditions
                </a>
                <a href="#" className="text-xs">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* 
<Link to="/" >Home</Link>
<Link to="/about" ></Link>
<Link to="/services" ></Link>
<Link to="/careers" ></Link>
<Link to="/clients" ></Link>
<Link to="/contact" ></Link> 
*/}