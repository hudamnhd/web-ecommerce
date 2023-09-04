import { handleAddCart } from "../utils/handleCart";

const ProductCard = ({
  item,
  cartItem,
  setCartItem,
  setSelectedItem,
  className,
}) => {
  return (
    <div key={item.id} className={`group relative product_card ${className}`}>
      <div className="absolute z-10 top-2 left-2 w-fit bg-blue-600 text-white font-semibold text-xs rounded-full px-3 py-1">
        20% Off
      </div>

      <div className="rounded-xl">
        <div className="div_image_card">
          <img src={item.image} alt={item.title} className="image_card" />
        </div>
        <div className="relative">
          <button
            onClick={() => setSelectedItem(item)}
            className="product_detail_btn"
          >
            Detail Product
          </button>
          <div className="p-2">
            <p className="card_text_category">{item.category}</p>
            <p className="card_text_title">{item.title}</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl px-2 pb-2">
        <div className="flex  items-center text-xs mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" text-[#ffcd4e] font-bold sm:text-[18px]"
              width="16"
              height="16"
              fill={i + 1 <= item.rating.rate ? "currentColor" : "#ccc"}
              viewBox="0 0 16 16"
              key={i}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          <p className="ml-1 mt-1  text-gray-400  font-medium">
            ({item.rating.count})
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="card_text_price">
              Rp {item.priceIDR.toLocaleString("id-ID")}
            </p>
          </div>
          <button
            onClick={() => handleAddCart(cartItem, setCartItem, item)}
            className="border-2 border-gray-200 hover:border-white hover:bg-blue-600 hover:text-white text-blue-600 duration-300 rounded-md p-0.5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
