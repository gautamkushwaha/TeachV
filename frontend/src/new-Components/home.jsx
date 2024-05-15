import Navbar from "./nav";
import Hero from "./home/hero";
import About from "./home/about";
import Join from "./home/join";
import Courses from "./home/courses";
import Testimonials from "./home/testimonials";
import Sponsors from "./home/sponsors";
import Footer from "./footer";


const home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Join/>
      <Courses/>
      <Testimonials/>
      <Sponsors/>
      <Footer/>
    </>
  );
};
export default home;
