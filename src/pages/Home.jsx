import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyChoose />
    </>
  );
}

export default Home;