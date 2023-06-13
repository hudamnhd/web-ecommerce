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
    categories,
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
    <section
      className="relative px-2 xs:px-8"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {dataFiltered && (
        <div className="categories_text_carousel">
          {categories.map((category) => (
            <p key={category} className="font-medium capitalize">
              Best {category}
            </p>
          ))}
        </div>
      )}
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
          <div />
        )}
      </Carousel>
    </section>
  );
};

export default ItemCarousel;
