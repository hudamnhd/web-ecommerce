import { product_01 } from "../assets";

const Hero = () => {
  return <ItemCarousel />;
};

export default Hero;

import { useContext } from "react";
import { AppContext } from "../context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const responsive = {
  xs: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const ItemCarousel = () => {
  const { dataFiltered, dataProduct, setIsMouseOver } = useContext(AppContext);

  return (
    <section
      className="relative px-2 xs:px-8"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Carousel
        infinite
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        renderButtonGroupOutside={true}
      >
        {dataFiltered ? (
          dataProduct?.map((item) => {
            return (
              <card className="mb-5 mt-8 grid sm:grid-cols-6 rounded-xl border border-sky-300 shadow-sm shadow-sky-500 relative mx-2">
                <div className="sm:col-span-4 bg-gradient-to-r from-sky-100 pr-4 rounded-b-xl sm:rounded-b-none sm:rounded-l-xl">
                  <h2 className="font-bold text-xl  sm:text-2xl md:text-3xl  ml-10 mt-8">
                    {item.title.split(" ").slice(0, 10).join(" ")}...
                  </h2>

                  <p className="font ml-10 mt-5">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat lorem ipsum
                    dolor sit amet, qui minim labore.{" "}
                  </p>

                  <button className="text-sky-500 font-semibold ml-10 mt-5 mb-8 group ">
                    Add to Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-6 w-6 ml-1 group-hover:translate-x-2 transition delay-100 transition-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>

                <div className="order-first sm:order-last sm:col-span-2 p-4 flex justify-center items-center rounded-xl">
                  <img
                    src={item.image}
                    className="bg-red-100 h-[160px] sm:h-[180px] md:h-[210px] right-0"
                  />
                </div>
              </card>
            );
          })
        ) : (
          <div />
        )}
      </Carousel>
    </section>
  );
};
