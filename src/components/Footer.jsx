import { useContext } from "react";
import { Logo, LogoSocialMedia } from "../components";
import { AppContext } from "../context";

const Footer = () => {
  const { categories } = useContext(AppContext);

  return (
    <footer>
      <div className="space-y-2 my-3">
        <Logo />
        <p className="max-w-[300px] xs:text-[15px] text-slate-600 leading-5">
          We make online shopping easy and affordable, with a wide selection of
          products, competitive prices, and fast shipping.{" "}
        </p>
        <p className="text-[15px] text-slate-600  pt-3">
          FK Store 2023 Develop By Huda
        </p>
      </div>
      <div className="flex flex-wrap gap-14 my-3 mr-6">
        {[1, 2, 3].map((index) => (
          <div
            className="flex shrink-0 items-start flex-col justify-between space-y-3"
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
      <div className="flex flex-col my-4  lg:w-1/5">
        <h3 className="font-semibold text-slate-700 text-center mb-4">
          Keep Connect with us
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
