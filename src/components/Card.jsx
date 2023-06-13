import { BiCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { handleAddCart } from "../utils/handleCart";

const ProductCard = ({
  item,
  cartItem,
  setCartItem,
  setSelectedItem,
  className,
}) => {
  return (
    <div key={item.id} className={`group product_card ${className}`}>
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
            <p className="card_text_title">
              {item.title.split(" ").slice(0, 3).join(" ")}...
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl px-2 pb-1">
        <p className="card_text_price">
          Rp {item.priceIDR.toLocaleString("id-ID")}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaStar className="card_icon_star" />
            <p className="card_text_rating">
              {item.rating.rate} <span className="border mr-1" /> Sold{" "}
              {item.rating.count}
            </p>
          </div>
          <BiCartAdd
            onClick={() => handleAddCart(cartItem, setCartItem, item)}
            className="card_icon_cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
