import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex flex-none flex-col">
      <h1 className="uppercase text-slate-600 font-bold text-2xl">
        FK<span className="text-sky-500">Store</span>
      </h1>
      <p className="flex-none text-xs text-slate-500 border-t-2 border-slate-500 w-fit pt-[2px]">
        Solution online shopping
      </p>
    </div>
  );
};

const LogoSocialMedia = () => {
  return (
    <div className="flex space-x-3 mb-4">
      {[
        [<FaFacebookF key="facebook" />],
        [<FaInstagram key="instagram" />],
        [<FaTwitter key="twitter" />],
        [<FaYoutube key="youtube" />],
        [<FaPinterest key="pinterest" />],
      ].map((icon, index) => (
        <div
          key={index}
          className="text-xl text-white p-[6px] border-2 border-sky-500 bg-sky-500 hover:bg-sky-600 rounded-md"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export { Logo, LogoSocialMedia };
