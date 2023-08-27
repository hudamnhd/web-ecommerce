import { useContext } from "react";
import { AppContext } from "../context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { responsive } from "../assets/style/responsiveCarousel";
import { Card } from "../components";

const ItemCarousel = () => {
  const {
    cartItem,
    setCartItem,
    dataFiltered,
    dataProduct,
    isMouseOver,
    setIsMouseOver,
    setSelectedItem,
  } = useContext(AppContext);

  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className={`${isMouseOver ? null : "opacity-0"} `}>
        <button className="button_next_carousel" onClick={next}>
          <FaAngleRight />
        </button>
        <button className="button_prev_carousel" onClick={previous}>
          <FaAngleLeft />
        </button>
      </div>
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-700 px-3 xs:px-10 mt-8 mb-2">
        Customers also purchased
      </h2>
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
          customButtonGroup={<CustomButtonGroupAsArrows />}
          renderButtonGroupOutside={true}
        >
          {dataFiltered ? (
            dataProduct?.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  setSelectedItem={setSelectedItem}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  className="h-[340px] m-2"
                />
              );
            })
          ) : (
            <div
              role="status"
              className=" p-3 border border-gray-200 rounded shadow animate-pulse dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-36 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="flex items-center mt-4 space-x-3">
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
                  <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </Carousel>
      </section>
    </>
  );
};

export default ItemCarousel;
