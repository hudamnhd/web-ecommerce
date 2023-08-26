import { useContext } from "react";
import { Logo, LogoSocialMedia } from "../components";
import { AppContext } from "../context";

const Footer = () => {
  const { categories } = useContext(AppContext);

  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-10 justify-between mb-7 md:mb-10">
        <div className="space-y-2.5 my-3">
          <Logo />
          <p className="max-w-sm text-slate-600 leading-6">
            We make online shopping easy and affordable, with a wide selection
            of products, competitive prices, and fast shipping.{" "}
          </p>
          <p className="text-[15px] text-slate-600 hidden pt-3">
            FK Store 2023 Develop By Huda
          </p>
        </div>
        <div className="flex flex-wrap flex-1 justify-between gap-8 my-3 max-w-2xl mr-5">
          {[1, 2, 3].map((index) => (
            <div
              className="flex shrink-0 items-start flex-col justify-between gap-y-4"
              key={index}
            >
              <h3 className="font-semibold text-slate-700 text-base">
                Product
              </h3>
              {categories.map((category) => (
                <button
                  key={category}
                  className=" capitalize text-slate-600 hover:text-sky-500"
                >
                  {category}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 w-full" />
      <div className="flex flex-col md:flex-row md:items-center gap-y-6 justify-between my-6">
        <div>
          <h3 className="font-medium mb-2 text-slate-700 text-base">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-500">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <form className="flex gap-x-1.5 max-w-sm">
          <input
            className=" py-1.5 px-4 w-full focus:outline-none border-gray-300 border-[1.5px] rounded-md"
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Your email addres"
          />
          <button className="py-1.5 px-4 text-white bg-sky-500 font-medium hover:bg-sky-600 rounded-md duration-300">
            Subcribe
          </button>
        </form>
      </div>

      <div className="border-t border-gray-300 w-full" />
      <div className="flex flex-col-reverse md:flex-row gap-y-5 md:items-center md:justify-between mt-4">
        <p className="text-sm text-gray-500">
          © 2023 FK Store. All rights reserved.
        </p>
        <LogoSocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
