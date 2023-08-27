import { useContext } from "react";
import { AppContext } from "../context";
import Search from "./Search";
import { CgClose } from "react-icons/cg";

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

          <div className="hidden md:flex gap-x-5 flex-1 lg:ml-8 text-sm ">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`${
                selectedCategory === null ? "text-sky-500" : null
              } categories_text  text-gray-500`}
            >
              All Category
            </button>
            {dataFiltered ? (
              <>
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
              </>
            ) : (
              <div className="flex-1 md:inline hidden" />
            )}
          </div>

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
