import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { CgClose, CgMathPlus, CgMathMinus, CgTrash } from "react-icons/cg";
import {
  cartTotal,
  handleDeleteItem,
  handleReductionItem,
  handleAdditionItem,
} from "../utils/handleCart";

const Cart = () => {
  const { toggle, setToggle, cartItem, setCartItem } = useContext(AppContext);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);

  return (
    <div>
      <div
        className={`${
          toggle ? "opacity-70" : "hidden"
        } fixed z-20 top-0 bg-black h-full w-full`}
      />
      {toggle && (
        <div className="product_cart">
          <div className="h-[80%]">
            <div className="flex justify-between items-center p-3 border-b-2">
              <h3 className="text-2xl font-semibold">Your Cart</h3>
              <CgClose
                role="button"
                onClick={() => setToggle(!toggle)}
                className="close_btn"
              />
            </div>
            <div className="p-4 h-full w-[375px] overflow-auto">
              {cartItem.length >= 1 ? (
                cartItem.map((item) => (
                  <div key={item.id} className="group product_box">
                    <div className="product_box_img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="flex flex-col justify-between w-[80%]">
                      <p className="text-lg">
                        {item.title.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <p className="text-slate-500 font-medium uppercase text-xs">
                        {item.category}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="font-medium">
                          Rp {item.priceIDR.toLocaleString("id-ID")}
                        </p>
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              handleDeleteItem(item.id, cartItem, setCartItem)
                            }
                          >
                            <CgTrash className="text-xl mr-3 hover:scale-150 duration-300" />
                          </button>
                          <button
                            onClick={() =>
                              handleReductionItem(item, cartItem, setCartItem)
                            }
                            className="border rounded-l-md p-1"
                          >
                            <CgMathMinus className="hover:scale-150 duration-300" />
                          </button>
                          <input
                            type="text"
                            name="count"
                            value={item.count}
                            readOnly
                          />
                          <button
                            onClick={() =>
                              handleAdditionItem(item, cartItem, setCartItem)
                            }
                            className="border rounded-r-md p-1"
                          >
                            <CgMathPlus className="hover:scale-150 duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xl w-[300px] font-medium text-center text-slate-500 my-[60%]">
                  Your Cart Empty
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between p-3 border-t-2 bg-white">
            <div>
              <p className="font-thin">Subtotal</p>
              <p className="font-semibold text-xl ">
                {cartTotal(cartItem).toLocaleString("id-ID")}
              </p>
            </div>
            <button className="checkout_btn">
              Checkout(
              {cartItem.reduce((total, product) => {
                return product.count + total;
              }, 0)}
              )
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
