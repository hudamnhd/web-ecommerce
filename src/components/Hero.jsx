import { handleAddCart } from "../utils/handleCart";
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

const Hero = () => {
  const { dataFiltered, dataProduct, cartItem, setCartItem } =
    useContext(AppContext);

  return (
    <section className="rounded-md sm:px-8">
      <Carousel
        infinite
        className="sm:rounded-xl shadow-lg shadow-gray-200 mt-32 md:mt-24 [10px] border border-gray-200"
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        {dataFiltered ? (
          dataProduct?.map((item) => {
            return (
              <card className="grid sm:grid-cols-6 sm:rounded-md shadow-blue-600 h-full">
                <div className="sm:col-span-4  pr-4 rounded-b-md sm:rounded-b-none sm:rounded-l-md bg-gradient-to-t sm:bg-gradient-to-r from-blue-100 via-blue-50 to-white">
                  <div />

                  <h2 className="font-bold  text-lg sm:text-2xl md:text-3xl ml-6 sm:ml-10 mt-4 sm:mt-8">
                    {item.title.slice(0, 45)}...
                  </h2>

                  <p className="font ml-6 sm:ml-10 mt-2 sm:mt-5">
                    {item.description.substring(0, 150)}...
                  </p>

                  <button
                    onClick={() => handleAddCart(cartItem, setCartItem, item)}
                    className="rounded-md  text-white py-1.5 bg-blue-600 rounded-md px-4 flex items-center text-[15px] py-1.5   font-semibold ml-6 sm:ml-10 mt-4 sm:mt-5 mb-4 sm:mb-8 group "
                  >
                    Add to Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-6 w-6 ml-1 group-hover:translate-x-2 transition delay-100 transition-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>

                <div className="w-full bg-white relative order-first sm:order-last sm:col-span-2 flex justify-center items-center rounded-r-md">
                  <div className="group relative flex justify-center items-center w-full h-full   cursor-pointer flex-col items-start  overflow-hidden rounded-lg  transition-all duration-300">
                    <div className="absolute right-6 top-0 h-16 w-16">
                      <div className="absolute left-[-34px] top-[32px] z-10 w-[170px] rotate-45 transform border border-white bg-blue-600 py-1 text-center font-semibold text-white">
                        20% OFF
                      </div>
                    </div>
                    <img
                      src={item.image}
                      className="p-3 transition-all duration-300 group-hover:opacity-90 h-[160px] sm:h-[180px] md:h-[210px] "
                    />
                  </div>

                  <div className=" hidden absolute z-10 top-2 left-2 w-fit bg-blue-600 text-white font-semibold text-sm rounded-full px-3 py-1">
                    20% OFF
                  </div>
                </div>
              </card>
            );
          })
        ) : (
          <div
            role="status"
            className="border p-2 space-y-8 animate-pulse md:space-y-0 md:flex flex-row-reverse md:gap-x-10 md:items-center mb-5 mt-10 sm:mt-16 md:mt-8 mx-2 px-4 py-2"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </Carousel>
    </section>
  );
};

export default Hero;
