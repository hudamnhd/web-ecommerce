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
              <p className="product_title">{selectedItem.title}</p>
              <div className="flex space-x-1 items-center mb-2">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <p className="product_ratesold">{selectedItem.rating.rate}</p>
                </div>
                <span className="text-slate-500">•</span>
                <p className="product_ratesold">
                  Sold {selectedItem.rating.count}
                </p>
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
