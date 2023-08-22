import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 ">
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
      <h1 className="uppercase text-slate-700 font-black text-[25px]">
        Fk<span className="text-sky-500 font-extrabold">Store</span>
      </h1>
    </div>
  );
};

const LogoSocialMedia = () => {
  return (
    <div className="flex justify-center space-x-3 mb-4">
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
