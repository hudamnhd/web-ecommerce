import { useContext } from "react";
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

  return (
    <>
      <NewCart />
      <div className="hidden">
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
                        <div className="space-y-1">
                          <p className="">
                            {item.title.split(" ").slice(0, 3).join(" ")}
                          </p>
                          <p className="text-slate-500 font-medium uppercase text-[10px]">
                            {item.category}
                          </p>
                        </div>
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
                  <div className="h-full w-full flex items-center">
                    <p className="text-lg w-full font-medium text-center text-slate-500">
                      Your Cart Empty
                    </p>
                  </div>
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
    </>
  );
};

export default Cart;

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const NewCart = () => {
  const [open, setOpen] = useState(true);
  const { toggle, setToggle, cartItem, setCartItem } = useContext(AppContext);

  return (
    <Transition.Root show={toggle} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-5">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 outline-none"
                            onClick={() => setToggle(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItem.length >= 1 ? (
                              cartItem.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.image}
                                      className="h-20 duration-300 "
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          {item.title
                                            .split(" ")
                                            .slice(0, 4)
                                            .join(" ")}
                                        </h3>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500 capitalize">
                                        {item.category}
                                      </p>
                                    </div>
                                    <div className="flex gap-x-1 flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-900 font-medium">
                                        Rp{" "}
                                        {item.priceIDR.toLocaleString("id-ID")}{" "}
                                      </p>

                                      <div className="flex items-center">
                                        <button
                                          onClick={() =>
                                            handleDeleteItem(
                                              item.id,
                                              cartItem,
                                              setCartItem
                                            )
                                          }
                                        >
                                          <CgTrash className="text-xl mr-2 hover:scale-150 duration-300" />
                                        </button>
                                        <div className="flex items-center border rounded-md">
                                          <button
                                            onClick={() =>
                                              handleReductionItem(
                                                item,
                                                cartItem,
                                                setCartItem
                                              )
                                            }
                                            className="rounded-l-md p-1 border-r"
                                          >
                                            <CgMathMinus className="hover:scale-150 duration-300" />
                                          </button>
                                          <input
                                            className="w-8 text-center border-none outline-none"
                                            type="text"
                                            name="count"
                                            value={item.count}
                                            readOnly
                                          />
                                          <button
                                            onClick={() =>
                                              handleAdditionItem(
                                                item,
                                                cartItem,
                                                setCartItem
                                              )
                                            }
                                            className="rounded-r-md p-1 border-l"
                                          >
                                            <CgMathPlus className="hover:scale-150 duration-300" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <div className="flex items-center h-[66vh]">
                                <p className="text-lg w-full font-medium text-center text-slate-500">
                                  Your Cart Empty
                                </p>
                              </div>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Rp {cartTotal(cartItem).toLocaleString("id-ID")}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700"
                        >
                          Checkout(
                          {cartItem.reduce((total, product) => {
                            return product.count + total;
                          }, 0)}
                          )
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
