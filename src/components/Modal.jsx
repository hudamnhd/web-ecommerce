import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { handleAddCart } from "../utils/handleCart";

const Modal = ({ selectedItem, setSelectedItem, cartItem, setCartItem }) => {
  useEffect(() => {
    if (selectedItem !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedItem]);

  return (
    <>
      {selectedItem && (
        <div className="modal_container">
          <div className="modal_block"></div>
          <div className="modal_product">
            <div className="modal_product_img">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="modal_product_detail">
              <p className="product_category">{selectedItem.category}</p>
              <p className="product_title">
                {selectedItem.title.split(" ").slice(0, 15).join(" ")}...
              </p>
              <div className="flex space-x-1 items-center mb-2">
                <div className="flex  items-center text-sm mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#ffcd4e] font-bold sm:text-[18px]"
                      width="16"
                      height="16"
                      fill={
                        i + 1 <= selectedItem.rating.rate
                          ? "currentColor"
                          : "#bbb"
                      }
                      viewBox="0 0 16 16"
                      key={i}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <p className="ml-1 mt-1  text-sm text-gray-400  font-medium">
                    ({selectedItem.rating.rate})
                  </p>
                  <span className="text-slate-500 mx-1">•</span>
                  <p className="mt-1  text-sm text-gray-400  font-medium">
                    {selectedItem.rating.count} Review
                  </p>
                </div>{" "}
              </div>
              <p className="product_price">
                Rp {selectedItem.priceIDR.toLocaleString("id-ID")}
              </p>
              <div className="mb-6">
                <h4 className="label_desc">Product Detail</h4>
                <p className="product_desc">{selectedItem.description}</p>
              </div>
              <button
                className="product_btn_add"
                onClick={() =>
                  handleAddCart(cartItem, setCartItem, selectedItem)
                }
              >
                Add to Cart
              </button>
              <button
                className="product_btn_close"
                onClick={() => setSelectedItem(null)}
              >
                <CgClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
