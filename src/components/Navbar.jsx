import { useContext } from "react";
import { AppContext } from "../context";
import { BiCart } from "react-icons/bi";
import Search from "./Search";
import { Logo } from "../components";
const Navbar = () => {
  const { cartItem, setToggle, toggle } = useContext(AppContext);

  return (
    <nav>
      <Logo />
      <Search />
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
    </nav>
  );
};

export default Navbar;
