import { Toaster } from "react-hot-toast";
import {
  Navbar,
  Cart,
  Hero,
  Products,
  ItemCarousel,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="main_container relative">
      <Toaster />
      <Navbar />
      <Cart />
      <Hero />
      <Products />
      <ItemCarousel />
      <Footer />
    </div>
  );
};

export default Home;
