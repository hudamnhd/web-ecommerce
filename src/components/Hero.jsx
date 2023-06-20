import { product_01 } from "../assets";

const Hero = () => {
  return (
    <section className="section_hero">
      <div className="my-auto max-w-[700px] space-y-2 xs:space-y-4">
        <h1 className="flex-1 text-3xl md:text-4xl font-bold">
          Special <span className="text-sky-500">Discount </span>First Shopping
        </h1>
        <p className="opacity-70">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat lorem ipsum dolor sit amet, qui
          minim labore.
        </p>
        <button className="section_hero_btn">Buy Now</button>
      </div>
      <div className="section_hero_img">
        <img src={product_01} alt="product_01" />
        <img src={product_01} alt="product_01" />
      </div>
    </section>
  );
};

export default Hero;
