import { useContext, useState } from "react";
import { AppContext } from "../context";
import { BiCart } from "react-icons/bi";
import Search from "./Search";
import { Logo } from "../components";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const { cartItem, setToggle, toggle, toggleNav, setToggleNav } =
    useContext(AppContext);

  return (
    <>
      <NewNavbar />
      <nav className="hidden">
        <Logo />
        <div className="nav_links">
          {[
            ["Products", "#products"],
            ["Promo", "#"],
            ["About", "#"],
            ["Help", "#"],
          ].map(([title, url]) => (
            <a key={title} href={url} className="nav_link">
              {title}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <div
            onClick={() => setToggle(!toggle)}
            className="z-20 relative cursor-pointer"
          >
            <div className="count_cart_navbar">
              {cartItem.reduce((total, product) => {
                return product.count + total;
              }, 0)}
            </div>
            <BiCart className="text-4xl" />
          </div>
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="sm:hidden w-8 ml-3 text-4xl"
          >
            {toggleNav ? <CgClose /> : <CgMenuRightAlt />}{" "}
            {toggleNav && (
              <div className="nav_mobile">
                {[
                  ["Products", "#products"],
                  ["Promo", "#"],
                  ["About", "#"],
                  ["Help", "#"],
                ].map(([title, url]) => (
                  <a
                    key={title}
                    href={url}
                    className="text-[18px] hover:text-sky-500"
                  >
                    {title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NewNavbar = () => {
  const {
    cartItem,
    selectedCategory,
    categories,
    setSelectedCategory,
    dataFiltered,
    setToggle,
    toggle,
    toggleNav,
    setToggleNav,
  } = useContext(AppContext);

  return (
    <nav>
      <Logo />
      {dataFiltered && (
        <div className="categories_menu">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`${
              selectedCategory === null ? "text-sky-500" : null
            } categories_text`}
          >
            All Category
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category ? "text-sky-500" : null
              } categories_text`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-end gap-5 flex-1  ">
        <div className="hidden xs:block relative flex justify-end focus-within:w-full w-[350px] duration-500">
          <Search />
        </div>
        <div className=" z-20 relative cursor-pointer">
          <div className="count_cart_navbar">
            {cartItem.reduce((total, product) => {
              return product.count + total;
            }, 0)}
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className=" rounded-md bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Cart</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
        <span
          aria-hidden="true"
          className="hidden sm:inline h-6 w-px rounded-md bg-gray-200"
        ></span>

        <div href="#" className="hidden sm:inline shrink-0">
          <span className="sr-only">Profile</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-md object-cover"
          />
        </div>
        <div
          onClick={() => setToggleNav(!toggleNav)}
          className="sm:hidden w-8  text-4xl"
        >
          {toggleNav ? <CgClose /> : <CgMenuRightAlt />}{" "}
          {toggleNav && (
            <div className="nav_mobile">
              {[
                ["Products", "#products"],
                ["Promo", "#"],
                ["About", "#"],
                ["Help", "#"],
              ].map(([title, url]) => (
                <a
                  key={title}
                  href={url}
                  className="text-[18px] hover:text-sky-500"
                >
                  {title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
