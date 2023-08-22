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
      className="relative sm:px-8"
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
              <card className="mb-5 mt-10 sm:mt-16 md:mt-8 grid sm:grid-cols-6  sm:rounded-md border-y sm:border sm:border-slate-300 shadow-sm relative sm:mx-2">
                <div className="sm:col-span-4 sm:bg-gradient-to-r from-sky-50 from-5% via-sky-300 via-50%  pr-4 rounded-b-md sm:rounded-b-none sm:rounded-l-md">
                  <h2 className="  font-bold text-lg  sm:text-2xl md:text-3xl ml-6 sm:ml-10 mt-4 sm:mt-8">
                    {item.title.split(" ").slice(0, 10).join(" ")}...
                  </h2>

                  <p className=" font ml-6 sm:ml-10 mt-2 sm:mt-5">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat lorem ipsum
                    dolor sit amet, qui minim labore.{" "}
                  </p>

                  <button className="rounded-md  text-sky-950  py-1.5  font-semibold ml-6 sm:ml-10 mt-2 sm:mt-5 mb-4 sm:mb-8 group ">
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

                <div className=" order-first sm:order-last sm:col-span-2 p-4 flex justify-center items-center rounded-md">
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
