import { useContext } from "react";
import { Logo, LogoSocialMedia } from "../components";
import { AppContext } from "../context";

const Footer = () => {
  const { categories } = useContext(AppContext);
  return (
    <footer>
      <div className=" md:w-1/4 space-y-2 mb-6">
        <Logo />
        <p className="xs:text-[15px] text-slate-600 leading-5">
          We make online shopping easy and affordable, with a wide selection of
          products, competitive prices, and fast shipping.{" "}
        </p>
        <p className="text-[15px] text-slate-600  pt-3">
          FK Store 2023 Develop By Huda
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-10 mb-6">
        {[1, 2, 3].map((index) => (
          <div
            className="flex flex-col justify-between items-start "
            key={index}
          >
            <h3 className="font-semibold text-slate-700">Product</h3>
            {categories.map((category) => (
              <button
                key={category}
                className="xs:text-[15px] capitalize text-slate-600 hover:text-sky-500"
              >
                {category}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:items-center mb-4">
        <h3 className="font-semibold text-slate-700 mb-4">
          Keep Connect With Us
        </h3>
        <LogoSocialMedia />
        <form className="box_cta">
          <input
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Your email addres"
          />
          <button>Subcrice</button>
          <p>Subscribe to get coupon & promotions</p>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
