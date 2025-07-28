import { FaMedium, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="h-20 w-full flex px-10 items-center justify-between bg-black text-white font-semibold">
      <p>
        <span className="font-normal text-xl">©</span> 2025 Soccer Fun. All rights
        reserved.
      </p>
      <div className="flex gap-5 text-2xl">
        <FaTelegram className="hover:scale-110 transition duration-300 hover:cursor-pointer" />
        <FaXTwitter className="hover:scale-110 transition duration-300 hover:cursor-pointer" />
        <FaMedium className="hover:scale-110 transition duration-300 hover:cursor-pointer" />
      </div>
    </footer>
  );
}
