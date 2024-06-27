import Header from "./header";
import Navbar from "./navbar";
import Hero from "./home/hero";
import Courses from "./home/courses";
import Categories from "./home/categories";
import Join from "./home/joinUs";
import About from "./home/about";
import Testimonials from "./home/testimonials";
import Sponsors from "./home/sponsors";
import Footer from "./footer";

const home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Courses />
      <Categories />
      <Join />
      <About />
      <Testimonials />
      <Sponsors />
      <Footer />
    </>
  );
};
export default home;
