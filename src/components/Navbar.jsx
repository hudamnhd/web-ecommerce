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
    <nav>
      <Logo />
      <Search />
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
      </div>
    </nav>
  );
};

export default Navbar;
