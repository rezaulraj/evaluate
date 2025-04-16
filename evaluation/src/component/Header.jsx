import React, { useEffect, useState } from "react";
import mainImage from "../assets/images/mainImg.jpg";
import { FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
const Header = () => {
  const navigation = [
    { title: "Top", path: "#top" },
    { title: "Vision", path: "#vision" },
    { title: "Message", path: "#message" },
    { title: "Service", path: "#service" },
    { title: "Story", path: "#story" },
    { title: "Profile", path: "#profile" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.hash || "#top");
  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash || "#top");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return (
    <div id="top" className="relative h-[66vh]">
      <div
        className="max-w-screen-lg mx-auto w-full h-full absolute top-0 left-0 right-0"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="fixed inset-0 bg-gray-700/20 z-10"></div>
        <div className="flex flex-col items-center justify-center h-full w-full relative z-20">
          <h2 className="text-4xl tracking-wider font-semibold font-lobster text-center text-white">
            Vestibulum mauris
          </h2>
          <h2 className="text-lg font-semibold font-inter text-center text-white">
            最新技術と自然との調和を目指す
          </h2>
        </div>
      </div>
      <div className="hidden md:block relative z-20 ">
        <ul className="flex items-center justify-end space-x-6 px-10 py-14">
          {navigation.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className={`font-semibold text-[14px] transition-colors uppercase ${
                  activePath === item.path
                    ? "text-gray-800 border-b-2 border-gray-800"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex items-center justify-end space-x-4 px-10 md:py-14 py-8 relative z-10">
        <button
          className="text-white hover:text-white/90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-white text-gray-400 p-1 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="relative z-20 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-2 bg-white divide-y divide-gray-300">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.path}
                      className={`block px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-700 uppercase ${
                        activePath === item.path
                          ? "text-gray-700 border-b-2 border-gray-700"
                          : "text-gray-600 hover:text-gray-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-2">
                        <MdKeyboardArrowRight />
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
