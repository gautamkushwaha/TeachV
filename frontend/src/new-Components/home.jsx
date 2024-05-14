import Hero from "./home/hero";
import About from "./home/about";
import Join from "./home/join";
import Courses from "./home/courses";
import Testimonials from "./home/testimonials";
import Sponsors from "./home/sponsors";

const home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Join/>
      <Courses/>
      <Testimonials/>
      <Sponsors/>
    </>
  );
};
export default home;
