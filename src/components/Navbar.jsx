import { useContext, useState } from "react";
import { AppContext } from "../context";
import { BiCart } from "react-icons/bi";
import Search from "./Search";
import { Logo } from "../components";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
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
      <div className="max-w-7xl mx-auto py-2.5  md:py-4">
        <div className="flex items-center justify-between  gap-x-3 md:justify-start">
          <button
            onClick={() => setToggleNav(!toggleNav)}
            type="button"
            className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
          >
            {toggleNav ? (
              <CgClose className="h-6 w-6" />
            ) : (
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[22px] h-[22px] mb-1 text-slate-700 "
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="uppercase text-slate-700  font-black text-[25px]">
              Fk
              <span className="text-sky-500 font-extrabold">Store</span>
            </h1>
          </div>

          {dataFiltered && (
            <div className="hidden md:flex gap-x-5 flex-1 lg:ml-8 text-sm ">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`${
                  selectedCategory === null ? "text-sky-500" : null
                } categories_text  text-gray-500`}
              >
                All Category
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category ? "text-sky-500" : null
                  } categories_text text-gray-500`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search />
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="relative flex h-10 items-center px-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
            >
              <svg
                className="h-6 w-6 leading-none text-gray-600 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 px-1 text-gray-500 text-sm font-semibold bg-sky-500 text-white rounded-md flex items-center justify-center">
                {cartItem.reduce((total, product) => {
                  return product.count + total;
                }, 0)}
              </span>
            </button>
            <button
              type="button"
              className="hidden md:block w-10 h-10 p-0.5 rounded-lg bg-gray-100   flex justify-center items-center"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="bottts"
                className="rounded-lg mx-auto"
              />
            </button>
          </div>
        </div>

        <div className="relative md:hidden mt-1.5">
          <Search />
        </div>

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
                className="text-gray-800   hover:text-sky-600 mb-1"
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
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
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[22px] h-[22px] mb-1 text-slate-700 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="uppercase text-slate-700  font-black text-[25px]">
          Fk
          <span className="sm:inline hidden text-sky-500 font-extrabold">
            Store
          </span>
        </h1>
      </div>

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

      <div className="flex items-center justify-end gap-x-3 sm:gap-5 flex-1 ">
        <div className=" relative flex justify-end focus-within:w-full sm:w-[350px] duration-500">
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
            className="mt-1 text-gray-500  hover:text-gray-700"
          >
            <span className="sr-only">Cart</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8
              w-8 fill-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="0.1"
            >
              <path d="M21.68 7.56C21.6079 7.31911 21.489 7.09482 21.33 6.9C21.1726 6.70616 20.9746 6.54914 20.75 6.44C20.5162 6.32451 20.2606 6.25976 20 6.25H6.17001C5.97424 6.26233 5.78176 6.30623 5.60001 6.38L5.54001 6.08C5.52974 5.82822 5.46976 5.58097 5.36351 5.35248C5.25727 5.12398 5.10686 4.91877 4.92095 4.74867C4.73504 4.57856 4.51732 4.44693 4.28031 4.36134C4.0433 4.27576 3.7917 4.23792 3.54001 4.25H2.54001C2.3411 4.25 2.15033 4.32902 2.00968 4.46967C1.86903 4.61032 1.79001 4.80109 1.79001 5C1.79001 5.19891 1.86903 5.38968 2.00968 5.53033C2.15033 5.67098 2.3411 5.75 2.54001 5.75H3.54001C3.96001 5.75 4.03001 5.82 4.11001 6.34L5.20001 11.88L5.74001 14.66C5.89395 15.5251 6.33844 16.3117 7.00001 16.89C7.4488 17.2552 7.97581 17.5118 8.54001 17.64C8.19468 18.0088 8.00175 18.4947 8.00001 19C8.00001 19.5304 8.21072 20.0391 8.5858 20.4142C8.96087 20.7893 9.46958 21 10 21C10.5304 21 11.0391 20.7893 11.4142 20.4142C11.7893 20.0391 12 19.5304 12 19C11.994 18.543 11.8317 18.1019 11.54 17.75H14.42C14.1427 18.1072 13.9947 18.5478 14 19C14.004 19.3238 14.0866 19.6417 14.2407 19.9265C14.3947 20.2114 14.6156 20.4545 14.8844 20.6351C15.1532 20.8157 15.4618 20.9283 15.7837 20.9633C16.1056 20.9983 16.4312 20.9546 16.7325 20.836C17.0338 20.7174 17.3018 20.5274 17.5134 20.2824C17.7251 20.0373 17.8741 19.7445 17.9476 19.4292C18.0211 19.1138 18.017 18.7854 17.9355 18.472C17.8541 18.1586 17.6978 17.8696 17.48 17.63C18.0113 17.5043 18.5093 17.2655 18.94 16.93C19.6079 16.4022 20.074 15.6607 20.26 14.83L21.73 8.37V8.3C21.7687 8.05269 21.7516 7.79986 21.68 7.56ZM18.79 14.49C18.6801 14.9909 18.4018 15.4389 18.0014 15.7592C17.6009 16.0795 17.1028 16.2528 16.59 16.25H9.38001C8.86108 16.2457 8.35958 16.0622 7.96047 15.7305C7.56136 15.3988 7.28917 14.9394 7.19001 14.43L6.00001 8.1C5.99732 8.06672 5.99732 8.03328 6.00001 8V7.86C6.02871 7.82801 6.06249 7.80097 6.10001 7.78H6.19001H20C20.0427 7.7698 20.0873 7.7698 20.13 7.78C20.1675 7.80097 20.2013 7.82801 20.23 7.86C20.2594 7.89071 20.2801 7.92867 20.29 7.97C20.295 8.0065 20.295 8.0435 20.29 8.08L18.79 14.49Z" />
            </svg>
          </button>
        </div>
        <div
          onClick={() => setToggleNav(!toggleNav)}
          className="sm:hidden h-[28px]
              w-[28px] text-[28px] text-gray-700"
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
